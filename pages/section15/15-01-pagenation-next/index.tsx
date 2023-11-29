import { gql, useQuery } from '@apollo/client';
import { IQuery, IQueryFetchBoardsArgs } from '../../../src/commons/types/generated/types';
import { useRouter } from 'next/router';
import { Fragment, MouseEvent, useState } from 'react';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMoved(): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickPageMove = (e: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(e.currentTarget.id) });
  };

  const onClickPagePrev = () => {
    setStartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };
  const onClickPageNext = () => {
    setStartPage(startPage + 10);
    refetch({ page: startPage + 10 });
  };
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}
      <br />

      <span onClick={onClickPagePrev}>이전페이지</span>
      {new Array(10).fill('아무거나').map((_, index) => (
        <Fragment key={index + startPage}>
          <span onClick={onClickPageMove} id={String(index + startPage)} style={{ cursor: 'pointer', margin: '0 7px' }}>
            {index + startPage}
          </span>
        </Fragment>
      ))}
      <span onClick={onClickPageNext}>다음페이지</span>
    </>
  );
}

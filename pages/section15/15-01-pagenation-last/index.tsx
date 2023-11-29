import { gql, useQuery } from '@apollo/client';
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from '../../../src/commons/types/generated/types';
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

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingMoved(): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  //data명 바꾸기
  const { data: dataBoardCount } = useQuery<Pick<IQuery, 'fetchBoardsCount'>, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount ?? 10 / 10);

  const onClickPageMove = (e: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(e.currentTarget.id) });
  };

  const onClickPagePrev = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickPageNext = (): void => {
    // 현재 페이지에서 10을 더한 페이지가 라스트 페이지보다 작은 경우에만!
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
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
      {new Array(10).fill('아무거나').map(
        (_, index) =>
          index + startPage <= lastPage && (
            <Fragment>
              <span key={index + startPage} onClick={onClickPageMove} id={String(index + startPage)} style={{ cursor: 'pointer', margin: '0 7px' }}>
                {index + startPage}
              </span>
            </Fragment>
          )
      )}
      <span onClick={onClickPageNext}>다음페이지</span>
    </>
  );
}

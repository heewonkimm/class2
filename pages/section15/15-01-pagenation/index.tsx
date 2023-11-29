import { gql, useQuery } from '@apollo/client';
import { IQuery, IQueryFetchBoardsArgs } from '../../../src/commons/types/generated/types';
import { Fragment, MouseEvent } from 'react';

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
  const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickPageMove = (e: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(e.currentTarget.id) });
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
      {new Array(10).fill('아무거나').map((_, index) => (
        <Fragment key={index + 1}>
          <span onClick={onClickPageMove} id={String(index + 1)} style={{ cursor: 'pointer' }}>
            {index + 1}
          </span>
          <br />
        </Fragment>
      ))}
      {/* {[1, 2, 3, 4, 5].map((el) => (
        <Fragment key={el}>
          <span onClick={onClickPageMove} id={String(el)} style={{ cursor: 'pointer' }}>
            {el}
          </span>
          <br />
        </Fragment>
      ))} */}
    </>
  );
}

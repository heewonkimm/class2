import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import type { IQuery, IQueryFetchBoardsArgs } from '../../../src/commons/types/generated/types';

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
  const [myIndex, setMyIndex] = useState([]);
  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    const test = [...myIndex];
    test[Number(event.currentTarget.id)] = true;
    setMyIndex(test);
    console.log(myIndex);
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) =>
        !myIndex[index] ? (
          <div key={el._id}>
            <span style={{ margin: '10px' }}>{el.title}</span>
            <span style={{ margin: '10px' }}>{el.writer}</span>
            <button id={String(index)} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <input type="text" key={el._id} style={{ display: 'block' }} />
        )
      )}
      <br />
    </>
  );
}

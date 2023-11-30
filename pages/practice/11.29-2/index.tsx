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

export default function StaticRoutingMoved() {
  const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const { data: dataBoardCount } = useQuery<Pick<IQuery, 'fetchBoardsCount'>, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);
  const [startPage, setStartPage] = useState(1);
  const [isActivePrev, setIsActivePrev] = useState(true);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount ?? 10 / 10);
  const [pageColor, setPageColor] = useState(new Array(10).fill('black'));

  const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
    const currentTarget = Number(e.currentTarget.id);
    void refetch({ page: currentTarget });

    const activePageColor = pageColor.map((_, index) => (index + startPage === currentTarget ? 'red' : 'black'));
    setPageColor(activePageColor);
  };

  const onClickPrev = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });

    if (startPage - 10 === 1) {
      setIsActivePrev(true);
    }
  };

  const onClickNext = (): void => {
    if (startPage + 10 <= lastPage) {
      void refetch({ page: startPage + 10 });
      setStartPage(startPage + 10);
      setIsActivePrev(false);
    }

    if (startPage + 20 > lastPage) {
      setIsActiveNext(true);
    }

    if (startPage + 10 > lastPage) return;
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}
      <hr />
      <br />
      <span onClick={onClickPrev} style={{ cursor: 'pointer', color: isActivePrev ? 'lightgray' : 'black' }}>
        이전 페이지
      </span>
      {new Array(10).fill('더미').map(
        (_, index) =>
          index + startPage <= lastPage && (
            <Fragment>
              <span
                key={index + startPage}
                id={String(index + startPage)}
                onClick={onClickPage}
                style={{ margin: '10px', padding: '7px', cursor: 'pointer', color: pageColor[index] }}
              >
                {index + startPage}
              </span>
            </Fragment>
          )
      )}
      <span onClick={onClickNext} style={{ cursor: 'pointer', color: isActiveNext ? 'lightgray' : 'black' }}>
        다음 페이지
      </span>
    </>
  );
}

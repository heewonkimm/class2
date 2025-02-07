import { gql, useQuery } from '@apollo/client';
import type { IQuery, IQueryFetchBoardsArgs } from '../../../src/commons/types/generated/types';
import CommentItem from '../../../src/components/units/16-comment-item';

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
  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  return (
    <>
      {data?.fetchBoards.map((el) => <CommentItem key={el._id} el={el} />)}
      <br />
    </>
  );
}

import { useRouter } from "next/router";
import BoardWrite from "../../../../../src/components/units/board/09-write2/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const {data} = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number)}
  });

  return (
    <>
      <div>$$$여기는 수정 페이지 입니다.</div>
      <BoardWrite isEdit={true} data={data}></BoardWrite>
      <div>$$$여기는 수정 페이지 입니다.</div>
    </>
  )
}
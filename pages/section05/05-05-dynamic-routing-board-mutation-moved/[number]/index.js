import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router";

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

export default function StaticRoutingMoved() {

  const router = useRouter();
  

  const {data} = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number)}
  });

  console.log(data)

  return(
    <>
      <div>{router.query.number} 페이지 이동이 완료되었다~~아래는 데이터를 불러오는 3가지 방법</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </>
  )
}
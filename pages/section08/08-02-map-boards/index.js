import { gql, useQuery } from "@apollo/client"

const FETCH_BOARDS = gql`
  query{
    fetchBoards{
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMoved() {

  const {data} = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards)

  return(
    <>
      {data?.fetchBoards.map(el => (
      <div>
        <span>
          <input type="checkbox"></input>
        </span>
        <span style={{margin: "10px"}}>{el.number}</span>
        <span style={{margin: "10px"}}>{el.title}</span>
        <span style={{margin: "10px"}}>{el.writer}</span>
      </div>
      ))}
      {/* <div>1111 페이지 이동이 완료되었다~~아래는 데이터를 불러오는 3가지 방법</div>
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data ? data.fetchBoard.contents : "로딩중~"}</div> */}
    </>
  )
}
import { gql, useMutation, useQuery } from "@apollo/client"

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

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){
    deleteBoard(number: $number){
      message
    }
  }
`;

export default function StaticRoutingMoved() {
  const {data} = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards)

  const [deleteBoard] = useMutation(DELETE_BOARD)

  const onClickDelete = (e) => {
    deleteBoard({
      variables: { number: Number(e.target.id) },
      refetchQueries: [{query: FETCH_BOARDS}]
    })
  }

  return(
    <> 
      {data?.fetchBoards.map(el => (
      <div key={el.number}>
        <span>
          <input type="checkbox"></input>
        </span>
        <span style={{margin: "10px"}}>{el.number}</span>
        <span style={{margin: "10px"}}>{el.title}</span>
        <span style={{margin: "10px"}}>{el.writer}</span>
        <span>
          <button id={el.number} onClick={onClickDelete}>delete</button>
        </span>
      </div>
      ))}
    </>
  )
}
// map 사용할땐 key값 세트로 작성하기
// 1. 프래그먼트란? <></>
// 2. 프래그먼트에 key 주고 싶다면? -> <Fragment></Fragment>
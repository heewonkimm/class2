import { gql, useQuery } from "@apollo/client"
import { MouseEvent } from "react";

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

  const onClickAlert = (e: MouseEvent<HTMLDivElement>) => {
    alert(e.currentTarget.id + "님이 작성한 글입니다.")
  }

  return(
    <>
      {data?.fetchBoards.map((el: any) => (
      <div id={el.writer} onClick={onClickAlert}>
        <span>
          <input type="checkbox"></input>
        </span>
        <span style={{margin: "10px"}}>{el.number}</span>
        <span style={{margin: "10px"}}>{el.title}</span>
        <span style={{margin: "10px"}}>{el.writer}</span>
      </div>
      ))}
    </>
  )
}

//이벤트버블링(자식-> 부모), 이벤트캡쳐링(부모.자식)
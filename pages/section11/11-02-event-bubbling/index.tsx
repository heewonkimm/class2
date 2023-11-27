import { gql, useQuery } from "@apollo/client"
import { MouseEvent } from "react";
import Checkbox from "./checkbox";

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


  const qqq3 = (e) => {
    e.stopPropagation()
    alert('3번클릭')
  }

  return(
    <>
      {data?.fetchBoards.map((el: any) => (
      <div id={el.writer} onClick={qqq3}>
        <Checkbox />
        <span style={{margin: "10px"}}>{el.number}</span>
        <span style={{margin: "10px"}}>{el.title}</span>
        <span style={{margin: "10px"}}>{el.writer}</span>
      </div>
      ))}
    </>
  )
}

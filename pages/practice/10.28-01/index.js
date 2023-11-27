import {gql, useMutation} from "@apollo/client"
import { useState } from "react";

const graphqlSetting = gql`
mutation createBoard($writer: String,  $title: String, $contents: String){
  createBoard(writer: $writer, title: $title, contents: $contents) {
    _id
    number
    message
  }
}
`;


export default function ApiTest() {

  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [createBoard] = useMutation(graphqlSetting);
  const onClickSubmit = async() => {
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      }
    });
    console.log(result)
  };

  const onChangeWriter = (e) => {
    setWriter(e.target.value)
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  };
  const onChangeContents = (e) => {
    setContents(e.target.value)
  };

  return(
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      제목: <input type="text" onChange={onChangeTitle} />
      내용: <input type="text" onChange={onChangeContents} />
      <button onClick={onClickSubmit}>GRAPHQL-요청하기</button>
    </>
  )
}
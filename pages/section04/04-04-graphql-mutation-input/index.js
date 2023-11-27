import { gql, useMutation } from "@apollo/client"
import { useState } from "react";

const graphqlSetting = gql`
  mutation createProduct($writer: String , $title: String, $contents: String){
    createProduct(writer: $writer, title:  $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;


export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  
  const [실행시킬함수] = useMutation(graphqlSetting);

  const onClickSubmit = async() => {
    const result = await 실행시킬함수({
      variables: { // = $
        writer: writer,
        // writer, // 객체에서 key와 value가 똑같이 생겼으면 value를 생략할 수 있음 -> shorthand-property
        title: title,
        contents: contents,
      }
    });
    console.log(result)
  }

  const onChangeWriter = (e) =>  {
    setWriter(e.target.value)
  };
  const onChangeTitle = (e) =>  {
    setTitle(e.target.value)
  };
  const onChangeContents = (e) =>  {
    setContents(e.target.value)
  };

  return(
    <>
    작성자: <input type="text" onChange={onChangeWriter} />
    제목: <input type="text" onChange={onChangeTitle} />
    내용: <input type="text" onChange={onChangeContents} />
    <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
    </>
  )
}
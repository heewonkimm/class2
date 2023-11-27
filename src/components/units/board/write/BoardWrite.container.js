import { useMutation } from "@apollo/client"
import { useState } from "react";
import { graphqlSetting } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";


export default function BoardWrite() {
  
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  
  const [실행시킬함수] = useMutation(graphqlSetting);

  const onClickSubmit = async() => {
    const result = await 실행시킬함수({
      variables: {
        writer: writer,
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
      <>~~~여기는 컨테이너입니다.</>
      <BoardWriteUI 
      aaa={onClickSubmit} 
      bbb={onChangeWriter}
      ccc={onChangeTitle}
      ddd={onChangeContents}
      ></BoardWriteUI>
      <>~~~여기는 컨테이너입니다.</>
    </>
  )
}
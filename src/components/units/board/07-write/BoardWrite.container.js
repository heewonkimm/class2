import { useMutation } from "@apollo/client"
import { useState } from "react";
import { graphqlSetting } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";


export default function BoardWrite() {
  
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [isActive, setIsActive] = useState(false);
  
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
    if(e.target.value && title && contents){
      setIsActive(true)
    }
  };
  const onChangeTitle = (e) =>  {
    setTitle(e.target.value)
    if(writer && e.target.value && contents){
      setIsActive(true)
    }
  };
  const onChangeContents = (e) =>  {
    setContents(e.target.value)
    if(writer && title && e.target.value){
      setIsActive(true)
    }
  };

  return(
    <>
      <>~~~여기는 컨테이너입니다.</>
      <BoardWriteUI 
      onClickSubmit={onClickSubmit} 
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isActive={isActive}
      ></BoardWriteUI>
      <>~~~여기는 컨테이너입니다.</>
    </>
  )
}
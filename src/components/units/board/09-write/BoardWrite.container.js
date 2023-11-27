import { useMutation } from "@apollo/client"
import { useState } from "react";
import { graphqlSetting, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";


export default function BoardWrite(props) {
  const router = useRouter();
  
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  
  const [실행시킬함수] = useMutation(graphqlSetting);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async() => {
    const result = await 실행시킬함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      }
    });
    console.log(result)
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`)
  }

  const onClickUpdate = async() => {
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: contents,
      }
    })
    console.log(result)
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`)
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
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      ></BoardWriteUI>
      <>~~~여기는 컨테이너입니다.</>
    </>
  )
}
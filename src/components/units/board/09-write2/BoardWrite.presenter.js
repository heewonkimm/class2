import { BlueButton, RedInput } from "./BoardWrite.styles";


export default function BoardWriteUI(props) {

  return(
    <>
      <div>@@@프리젠터페이지입니다@@@</div>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/>  
      제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/>
      내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}/>
      <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
        {props.isEdit ? "수정" : "등록"}하기
      </BlueButton>
      <div>@@@프리젠터페이지입니다@@@</div>
    </>
  )
}

//props.data ? props.data.fetchBoard.writer : "" 옵셔널체이닝 -> props.data?.fetchBoard.writer
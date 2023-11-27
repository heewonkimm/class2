import { BlueButton, RedInput } from "./BoardWrite.styles";


export default function BoardWriteUI(props) {

  return(
    <>
      <div>!!!여기는 프리젠터입니다.</div>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} />
      제목: <input type="text" onChange={props.onChangeTitle} />
      내용: <input type="text" onChange={props.onChangeContents} />
      <BlueButton 
      onClick={props.onClickSubmit}
      isActive={props.isActive}
      >Graphql-API 요청하기</BlueButton>
      <div>!!!여기는 프리젠터입니다.</div>
    </>
  )
}
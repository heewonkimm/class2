import { GoldInput, PinkInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {

  return(
    <>
      <div>페이지333</div>
      <div>다이나믹 라우팅을 해봅시다.</div>
      판매자: <PinkInput type="text" onChange={props.onChangeSeller}/>
      상품명: <input type="text"onChange={props.onChangeName} />
      상품내용: <GoldInput type="text" onChange={props.onChangeDetail}/>
      상품가격: <input type="text" onChange={props.onChangePrice}/>
      <button onClick={props.onClickSubmit}>등록하기 버튼</button>
    </>
  )
}
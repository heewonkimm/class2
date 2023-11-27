

export default function BoardWriteUI(props) {

  return(
    <>
      <div>{props.isEdit ? "수정" : "등록"}페이지입니다.</div>
      판매자: <input type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchProduct.seller}/>
      상품: <input type="text" onChange={props.onChangeName} defaultValue={props.data?.fetchProduct.name}/>
      상세: <input type="text" onChange={props.onChangeDetail} defaultValue={props.data?.fetchProduct.detail}/>
      가격: <input type="text" onChange={props.onChangePrice} defaultValue={props.data?.fetchProduct.price}/>
      <button onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
        {props.isEdit ? "수정" : "등록"}하기
      </button>
    </>
  )
}
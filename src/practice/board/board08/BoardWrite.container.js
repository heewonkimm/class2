import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./BoardWrite.queries";


export default function BoardWrite(props) {

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT)
  const router = useRouter();

  const [writer, setWriter] = useState('');
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState('');

  const onClickSubmit = async() => {
    const result = await createProduct({
      variables: {
        seller: writer,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        }
      }
    })
    console.log(result)
    router.push(`/practice/page08/boards/${result.data.createProduct._id}`)
  };

  const onClickUpdate = async() => {
    const myVariables = {}
    if(name) myVariables.name = name;
    if(detail) myVariables.detail = detail;
    if(price) myVariables.price = Number(price);
    
    const result = await updateProduct({
      variables: {
        productId: router.query.num,
        updateProductInput: myVariables
      }
    })
    console.log(result)
    router.push(`/practice/page08/boards/${result.data.updateProduct._id}`)
  };

  const onChangeWriter = (e) => {
    setWriter(e.target.value)
  }
  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeDetail = (e) => {
    setDetail(e.target.value)
  }
  const onChangePrice = (e) => {
    setPrice(e.target.value)
  }


  return(
    <BoardWriteUI
    onChangeWriter={onChangeWriter}
    onChangeName={onChangeName}
    onChangeDetail={onChangeDetail}
    onChangePrice={onChangePrice}
    onClickSubmit={onClickSubmit}
    onClickUpdate={onClickUpdate}
    isEdit={props.isEdit}
    data={props.data}
    ></BoardWriteUI>
  )
}
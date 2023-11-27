import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_PRODUCT } from "./BoardWrite.queries";



export default function BoardWrite(){

  const router = useRouter();
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const [seller, setSeller] = useState('');
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState('');
  const [isActive, setIsActive] = useState(false);

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
    if(e.target.value && name && detail && price) {
      setIsActive(true);
    }
  }
  const onChangeName = (e) => {
    setName(e.target.value);
    if(seller && e.target.value && detail && price) {
      setIsActive(true);
    }
  }
  const onChangeDetail = (e) => {
    setDetail(e.target.value);
    if(seller && name && e.target.value && price) {
      setIsActive(true);
    }
  }
  const onChangePrice = (e) => {
    setPrice(e.target.value);
    if(seller && name && detail && e.target.value) {
      setIsActive(true);
    }
  }

    const onClickSubmit = async() => {
      alert('게시물이 등록되었습니다!');
      try {
        const result = await createProduct({
          variables: {
            seller: seller,
            createProductInput: {
              name: name,
              detail: detail,
              price: Number(price),
            }
          }
        })
        console.log(result.data.createProduct._id)
        router.push(`/practice/10.30/detail/${result.data.createProduct._id}`)
      } catch(error) {
        alert(error.message)
      }
    }
  return(
    <>
      <div>페이지222</div>
      <BoardWriteUI
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickSubmit={onClickSubmit}
      isActive={isActive}
      ></BoardWriteUI>
    </>
  )
}
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react"

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
    }
  }
`;

export default function RoutingTest() {

  const router = useRouter();
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const [seller, setSeller] = useState('');
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState('');

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  }
  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  }
  const onChangePrice = (e) => {
    setPrice(e.target.value)
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
      <div>다이나믹 라우팅을 해봅시다.</div>
      판매자: <input type="text" onChange={onChangeSeller}/>
      상품명: <input type="text"onChange={onChangeName} />
      상품내용: <input type="text" onChange={onChangeDetail}/>
      상품가격: <input type="text" onChange={onChangePrice}/>
      <button onClick={onClickSubmit}>등록하기 버튼</button>
    </>
  )
}
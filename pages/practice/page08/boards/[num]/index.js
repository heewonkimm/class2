import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID){
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;


export default function BoardNewPage() {

  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.num
    }
  });

  const onClickEdit = () => {
    router.push(`/practice/page08/boards/${router.query.num}/edit`)
  }

  console.log(data)
  
  return(
    <>
      <div>{String(data?.fetchProduct._id).slice(-4).toUpperCase()}  디테일 페이지입니다.</div>
      <div>판매자: {data?.fetchProduct.seller}</div>
      <div>상품: {data?.fetchProduct.name}</div>
      <div>상세: {data?.fetchProduct.detail}</div>
      <div>가격: {data?.fetchProduct.price}</div>
      <button onClick={onClickEdit}>수정하기</button>
    </>
  )
}
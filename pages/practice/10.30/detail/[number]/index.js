import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
query productId($productId: ID){
  fetchProduct(productId: $productId){
    _id
    seller
    name
    detail
    price
  }}
`;

export default function RoutingTestMoved() {
  
  const router = useRouter();

  const {data} = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.number
    }
  })
  console.log(data)
  // console.log(data)

  return(
    <>
      <div>{router.query.number}페이지 이동이 완료되었습니다.</div>
      셀러: {data?.fetchProduct.seller}<br/>
      상품명: {data?.fetchProduct.name}<br/>
      상세내용: {data?.fetchProduct.detail}<br/>
      가격: {data?.fetchProduct.price}
    </>
  )
}
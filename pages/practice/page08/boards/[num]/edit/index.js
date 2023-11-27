import { gql, useQuery } from "@apollo/client";
import BoardWrite from "../../../../../../src/practice/board/board08/BoardWrite.container";
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

export default function BoardEditPage() {
  const router = useRouter();

  const {data} = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.num }
  })
console.log(data)
  return(
    <BoardWrite 
    isEdit={true}
    data={data}
    ></BoardWrite>
  )
}
import {gql, useMutation} from "@apollo/client"

const graphqlSetting = gql`
mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
  createProduct(seller: $seller, createProductInput: $createProductInput) {
    _id
    number
    message
  }
}
`;


export default function ApiTest() {

  const [createProduct] = useMutation(graphqlSetting);
  const onClickSubmit = async() => {
    const result = await createProduct({
      variables: {
        seller: "밀크티",
        createProductInput: {
          name: "우유",
          detail: "디테일",
          price: 100,
        }
      }
    });
    console.log(result)
  };


  return(
    <>
      <button onClick={onClickSubmit}>GRAPHQL-요청하기</button>
    </>
  )
}
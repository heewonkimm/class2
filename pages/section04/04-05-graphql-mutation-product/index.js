import { gql, useMutation } from "@apollo/client"

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller: $seller, createProductInput: $createProductInput){
      _id
      number
      message
    }
  }
`;


export default function GraphqlMutationPage() {
  
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async() => {
    const result = await createProduct({
      variables: {
        seller: "두리",
        createProductInput: {
          name: "의자",
          detail: "정말 좋은 의자",
          price: 5000,
        }
      }
    })
    console.log(result)
  }

  return(
    <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
  )
}
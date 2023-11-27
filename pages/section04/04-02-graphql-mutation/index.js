import { gql, useMutation } from "@apollo/client"

const graphqlSetting = gql`
  mutation {
    createBoard(writer: "나나", title:"첫글입니다.", contents:"시작합니다"){
      _id
      number
      message
    }
  }
`;


export default function GraphqlMutationPage() {
  
  const [실행시킬함수] = useMutation(graphqlSetting);

  const onClickSubmit = async() => {
    const result = await 실행시킬함수();
    console.log(result)
  }

  return(
    <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
  )
}
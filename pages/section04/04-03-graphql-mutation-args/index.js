import { gql, useMutation } from "@apollo/client"

const graphqlSetting = gql`
  mutation createBoard($writer: String , $title: String, $contents: String){
    createBoard(writer: $writer, title:  $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;


export default function GraphqlMutationPage() {
  
  const [실행시킬함수] = useMutation(graphqlSetting);

  const onClickSubmit = async() => {
    const result = await 실행시킬함수({
      variables: {
        writer: "사자",
        title: "하하호호",
        contents: "룰루랄라"
      }
    });
    console.log(result)
  }

  return(
    <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
  )
}
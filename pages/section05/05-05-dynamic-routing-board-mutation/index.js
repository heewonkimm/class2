import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router";

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

  const router = useRouter();
  
  const [실행시킬함수] = useMutation(graphqlSetting);

  const onClickSubmit = async() => {

    try {
      const result = await 실행시킬함수({
        variables: {
          writer: "사자",
          title: "하하호호",
          contents: "룰루랄라"
        }
      });
      console.log(result.data.createBoard.number)
      console.log(result)
      router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
    } catch(error) {
      alert(error.message)
    }
    
  }

  return(
    <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
  )
}
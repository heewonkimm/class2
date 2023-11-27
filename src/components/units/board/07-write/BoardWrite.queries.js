import { gql } from "@apollo/client"


export const graphqlSetting = gql`
  mutation createProduct($writer: String , $title: String, $contents: String){
    createProduct(writer: $writer, title:  $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

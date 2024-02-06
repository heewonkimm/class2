import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const graphqlSetting = gql`
  mutation createProduct($writer: String, $title: String, $contents: String) {
    createProduct(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: '',
    title: '',
    contents: '',
  });

  const [실행시킬함수] = useMutation(graphqlSetting);

  const onClickSubmit = async () => {
    const result = await 실행시킬함수({
      variables: { ...inputs },
    });
    console.log(result);
  };

  const onChangeInputs = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      제목: <input type="text" id="title" onChange={onChangeInputs} />
      내용: <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
    </>
  );
}

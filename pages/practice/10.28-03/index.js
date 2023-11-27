import axios from "axios";

export default function RestApiTest() {

const onClickSync = () => {
  const result = axios.get('https://koreanjson.com/posts/1');
  console.log(result)
};
const onClickAsync = async() => {
  const result = await axios.get('https://koreanjson.com/posts/1');
  console.log(result.data.title)
};

  return(
    <>
      <button onClick={onClickSync}>RestAPI(비동기) 요청하기</button>
      <button onClick={onClickAsync}>RestAPI(동기) 요청하기</button>
    </>
  )
}
import Home2 from '../../section01/01-01-example';
import axios from 'axios';

export default function RestGetPage()  {

  function onClickAsync() {
    const result = axios.get('https://koreanjson.com/posts/1');
    console.log(result)
  }

  // async function onClickSync() {
  //   const result = await axios.get('https://koreanjson.com/posts/1');
  //   console.log(result.data.title)
  // }

  const onClickSync = async() => {
    const result = await axios.get('https://koreanjson.com/posts/1');
    console.log(result.data.title)
  }
  return (
    <div>
      <button onClick={onClickAsync}>Rest API(비동기) 요청하기</button>
      <button onClick={onClickSync}>Rest API(동기) 요청하기</button>
      <Home2></Home2>
    </div>
  )
}
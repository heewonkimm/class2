import { gql, useMutation, useQuery } from "@apollo/client"

const FETCH_PRODUCTS = gql`
  query {
    fetchProducts {
      _id
      seller
      name
      detail
      price
    }}
`;

const DELETE_BOARD = gql`
  mutation deleteProduct($productId: ID){
    deleteProduct(productId: $productId){
      message
    }
  }
`;

const classmates = [
  { name: "철수", age: 10, school: "토끼초등학교" },
  { name: "영희", age: 13, school: "다람쥐초등학교" },
  { name: "훈이", age: 11, school: "토끼초등학교" },
];

const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
]
const result = fruits.filter(el => el.number % 2 ===0)


export default function MapTest() {

  const {data} = useQuery(FETCH_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_BOARD);
  console.log(data?.fetchProducts)

  const onClickDelete = (e) => {
    deleteProduct({
      variables: { productId: e.target.id },
      refetchQueries: [{query: FETCH_PRODUCTS}]
    })
  };

  return(
    <>
      {data?.fetchProducts.map(el=> (
        <div key={el._id}>
          <span>
            <input type="checkbox"></input>
          </span>
          <span style={{margin: "10px"}}>판매자: {el.seller}</span>
          <span style={{margin: "10px"}}>상품명: {el.name}</span>
          <span style={{margin: "10px"}}>디테일: {el.detail}</span>
          <span style={{margin: "10px"}}>가격: {el.price}</span>
          <span>
            <button id={el._id} onClick={onClickDelete}>삭제</button>
          </span>
        </div>
        ))
      }
      <br/>
      {classmates.map(el => (<div>이름: {el.name}{el.school === "다람쥐초등학교" ? "어린이" : ''} 나이: {el.age} 학교: {el.school} {el.school === "토끼초등학교" ? "candy: 10" : ''}</div>))}
      <br/>
      <br/>
      {result.map(el => (<div>{el.number} {el.title}</div>))}
    </>
  )
}
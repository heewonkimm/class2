import { useState } from "react";
import { List, Wrapper, Title } from "../../../../src/practice/board/checklist";

const dataList = [
  { id: 1, data: "9월달 시스템 점검 안내입니다.", date: "2020.09.19" },
  { id: 2, data: "안녕하세요! 공지사항 전달드립니다.", date: "2020.09.17" },
  { id: 3, data: "개인정보 처리방침 변경 사전 안내", date: "2020.09.12" },
  { id: 4, data: "ios 10.0이하 지원 중단 안내", date: "2020.08.10" },
  { id: 5, data: "이용약관 변경 사전 안내", date: "2020.08.01" },
  { id: 6, data: "개인정보 처리방침 변경 사전 안내", date: "2020.07.19" },
];
// console.log(dataList.length)

export default function CheckList() {
  const [checkList, setCheckList] = useState([]); //체크리스트 요소들을 담을 빈배열
  
  // 전체선택 누를 경우
  const onClickCheckALl = () => {
    if(checkList.length !== dataList.length) { // 체크리스트에 담겨져 있는 배열의 길이가 데이터리스트의 배열의 길이가 같지 않다 -> datalist 전체를 담아라(전체선택)
      setCheckList(dataList);
    } else {
      setCheckList([]); // 아니라면 전체해제해라(빈배열로 만들어라)
    }
  }
  const onCheckedItem = (list) => { //체크리스트에 배열 담기
    if(checkList.every((cur) => cur.id !== list.id)){ // change된 체크박스가 현재 체크리스트 전체와 비교 했을 때 id가 같은게 있는가,,없다면 현재 체크리스트를 복사하고 지금 체크한 체크박스를 담는다.
      setCheckList([...checkList, list]);
    } else {
      const result = checkList.filter((cur) => cur.id !== list.id);// change된 체크박스가 현재 체크리스트에 있다 -> filter -> 현재 체크리스트에 배열이 담겨있다. 클릭한 요소가 이미 있다-> filter를 해서 클릭한 요소 빼고 나머지 다른 요소들만 배열에 담는다.
      setCheckList(result); // 클릭한 요소 빼고 배열에 담음
    }
  }
  const isChecked = (list) => { // 체크 되어져 있는지 확인하기
    return checkList.some((cur) => cur.id === list.id) //담겨져 있는 체크 리스트들 중에 하나라도 
  }
  console.log(checkList)
  return(
    <>
      <Wrapper>
        <Title>
          <span>
            <input 
            type="checkbox"
            onChange={onClickCheckALl}
            checked={checkList.length === dataList.length}
            />
          </span>
          <span></span>
          <span className="boardTitle">제목</span>
          <span>작성일</span>
        </Title>
        {
          dataList.map((el, index) => (
            <List key={index}>
              <span>
                <input 
                type="checkbox"
                onChange={() => onCheckedItem(el)}
                checked={isChecked(el)}
                />
              </span>
              <span>{el.id}</span>
              <span className="boardTitle">{el.data}</span>
              <span>{el.date}</span>
            </List>
          ))
        }
      </Wrapper>
    </>
  )
}
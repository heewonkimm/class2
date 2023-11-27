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

export default function CheckList() {

  const [checklist, setChecklist] = useState([]);

  const onCheckedAll = () => {
    if(checklist.length !== dataList.length) {
      setChecklist(dataList);
    } else {
      setChecklist([])
    }
  }

  const onCheckItem = (item) => {
    if(checklist.every((list) => list.id !== item.id)) {
      setChecklist([...checklist, item])
    } else {
      const result = checklist.filter((list) => list.id !== item.id)
      setChecklist(result)
    }
  }
  
  const isChecked = (item) => {
    return checklist.some((list) => list.id === item.id)
  }
  console.log(checklist)

  return(
    <>
      <Wrapper>
        <Title>
          <span>
            <input 
            type="checkbox"
            onChange={onCheckedAll}
            checked={checklist.length === dataList.length}
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
                  onChange={() => onCheckItem(el)}
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
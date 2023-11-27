import styled from "@emotion/styled";

export default function LayoutHeader(): JSX.Element {
  const Wrapper = styled.div`
    height: 50px;
    background-color: gold;
  `;
  return (
    <>
      <Wrapper>여기는 헤더입니다.</Wrapper>
    </>
  );
}

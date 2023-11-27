import styled from "@emotion/styled";

export default function LayoutFooter(): JSX.Element {
  const Wrapper = styled.div`
    height: 100px;
    background-color: skyblue;
  `;
  return (
    <>
      <Wrapper>여기는 푸터입니다.</Wrapper>
    </>
  );
}

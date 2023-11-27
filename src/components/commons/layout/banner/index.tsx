import styled from "@emotion/styled";

export default function LayoutBanner(): JSX.Element {
  const Wrapper = styled.div`
    height: 50px;
    background-color: purple;
  `;
  return (
    <>
      <Wrapper>여기는 배너입니다.</Wrapper>
    </>
  );
}

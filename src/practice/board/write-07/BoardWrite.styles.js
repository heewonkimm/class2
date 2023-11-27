import styled from "@emotion/styled";

export const GreenBtn = styled.button`
  width: 200px;
  color: ${(props) => props.isActive ? "white" : "black"};
  margin-left: 20px;
  background-color: ${(props) => props.isActive ? "green" : ""};
`;
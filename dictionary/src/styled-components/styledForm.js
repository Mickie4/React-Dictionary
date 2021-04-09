import styled from "styled-components";

export const Input = styled.input`
  border-radius: 5px;
  border: ${({ theme }) => theme.borderInput};
  width: 350px;
  padding: 5px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.background};
`;

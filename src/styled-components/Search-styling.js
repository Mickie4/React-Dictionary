import styled from "styled-components";

export const Input = styled.input`
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  width: 350px;
  padding: 5px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.background};
`;

export const SearchBtn = styled.button`
  border-radius: 5px;
  padding: 5px 10px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  background: ${({ theme }) => theme.primaryColor};
  color: #fafafa;
  font-family: "Archivo";
`;

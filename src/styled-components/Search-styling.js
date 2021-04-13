import styled from "styled-components";

export const StyledForm = styled.form`
display: inline-block;
margin-left: 0;
margin right: 0;
text-align: left;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryColor};
  width: 250px;
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

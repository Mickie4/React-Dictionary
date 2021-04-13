import styled from "styled-components";
export const StyledContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const StyledCol = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 15px;
`;

export const Section = styled.div`
  background: ${({ theme }) => theme.section.background};
  border-radius: 8px;
  padding: 5px;
  margin: 15px;
  border: 1px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  width: 100%;
`;

export const StyledForm = styled.form`
  margin: 0 auto;
  padding: 30px;
  text-align: center;
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryColor};
  width: auto;
  padding: 5px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.background};
  @media (min-width: 768px) {
    width: 250px;
  }
  @media (min-width: 1024px) {
    width: 450px;
  }
`;

export const StyledBtn = styled.button`
  border-radius: 5px;
  padding: 5px 10px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  background: ${({ theme }) => theme.primaryColor};
  color: #fafafa;
  font-family: "Archivo";
  @media (max-width: 3375px) {
    margin-top: 15px;
`;

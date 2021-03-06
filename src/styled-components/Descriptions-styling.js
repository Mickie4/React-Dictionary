import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 15px;
`;

export const StyledCol = styled.div`
  position: relative;
  width: 100%;
  padding-left: 15px;
  @media (min-width: 1024px) {
    padding-left: -5px;
  }
`;

export const StyledWord = styled.h1`
  font-size: 2.2em;
  font-weight: 600;
  text-transform: capitalize;
  display: inline;
  text-align: center;
`;

export const Section = styled.div`
  background: ${({ theme }) => theme.section.background};
  border-radius: 8px;
  margin-top: 5px;
  padding: 10px 15px;
  border: 1px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
`;

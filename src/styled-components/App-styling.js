import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const StyledCol = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;
`;

export const StyledColLeft = styled.div`
  position: relative;
  width: 100%;
  padding-right: 275px;
  padding-left: 15px;
  text-align: right;
  @media (max-width: 768px) {
    padding-right: 160px;
  }
  @media (max-width: 425px) {
    padding-right: 20px;
  }
  @media (min-width: 1025px) {
    padding-right: 360px;
  }
`;

export const StyledBtn = styled.button`
  background: #333;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  font-family: 'Archivo', sans-serif;
  margin: 0 auto;
  overflow: hidden;
   padding: 3px 0;
  position: relative;
  width: 50px;
  margin: 20px 10px;

  }
`;

export const StyledIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const StyledHeader = styled.h1`
  font-weight: 600;
  word-spacing: 5px;
  @media (max-width: 778px) {
    font-size: 2.2em;
  } ;
`;

export const StyledFooter = styled.footer`
  margin-top: 250px;
  text-align: center;
  padding-bottom: 50px;
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.primaryColor};
`;

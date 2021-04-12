import styled from "styled-components";

export const ToggleButton = styled.button`
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
  margin-bottom: 30px;
  }
`;

export const IconImage = styled.img`
  height: 20px;
  width: 20px;
`;

export const Header = styled.h1`
  font-weight: 600;
  word-spacing: 5px;
  @media (max-width: 778px) {
    font-size: 2.2em;
  } ;
`;

export const PromptText = styled.h5`
  padding-top: 20px;
  font-style: oblique;
`;

export const StyledFooter = styled.footer`
  margin-top: 250px;
  text-align: center;
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.primaryColor};
`;

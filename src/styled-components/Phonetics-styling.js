import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-bottom: 10px;
`;

export const StyledLink = styled.a`
  margin-right: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 17px;
  padding: 8px 18px;
  border: 1px solid #ddd;
  border-radius: 50px;
  text-decoration: none;
  display: inline;
  color: #a45ca8;
`;

export const StyledParagraph = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme.secondaryColor};
`;

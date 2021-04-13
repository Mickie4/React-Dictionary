import styled from "styled-components";

export const Word = styled.h1`
  font-size: 2.2em;
  font-weight: 600;
  text-transform: capitalize;
  display: inline;
`;

export const StyledParagraph = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme.secondaryColor};
`;

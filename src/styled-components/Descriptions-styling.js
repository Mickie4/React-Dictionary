import styled from "styled-components";

export const Word = styled.h1`
  font-size: 2.2em;
  text-transform: capitalize;
`;

export const Phonetics = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme.secondaryColor};
`;

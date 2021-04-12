import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  text-align: left;
`;

export const Example = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.example};
`;

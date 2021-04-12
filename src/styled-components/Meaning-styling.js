import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.3em;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Paragraph = styled.p`
  text-align: left;
`;

export const Example = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.example};
`;

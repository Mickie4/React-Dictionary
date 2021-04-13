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

export const Section = styled.div`
  background: ${({ theme }) => theme.section.background};
  border-radius: 8px;
  padding: 10px 15px;
  margin: 20px 0;
  border: 1px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  position: relative;
  width: 100%;
`;

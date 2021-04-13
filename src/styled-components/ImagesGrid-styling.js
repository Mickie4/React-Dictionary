import styled from "styled-components";

export const ImageGrid = styled.img`
  border-radius: 30px;
  padding: 10px;
  max-width: 100%;
  height: auto;
`;

export const Section = styled.div`
  background: rgb(234, 239, 255);
  background: ${({ theme }) => theme.section.background};
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
  border: 1px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
`;

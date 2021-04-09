import styled from "styled-components";

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  font-family: 'Archivo', sans-serif;
  margin: 0 auto;
  overflow: hidden;
  padding: 5px 22px;
  position: relative;
  }
`;

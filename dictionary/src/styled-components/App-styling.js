import styled from "styled-components";

export const ToggleButton = styled.button`
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

export const IconImage = styled.img`
  height: 25px;
  width: 25px;
`;

export const Header = styled.h1`
  font-weight: 600;
  word-spacing: 5px;
`;

export const PromptText = styled.h5`
  padding-top: 20px;
  font-style: oblique;
`;

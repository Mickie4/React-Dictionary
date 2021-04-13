import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Archivo', sans-serif;
    transition: all 0.25s linear;
    margin: 0;
    padding: 0;
  }
  `;

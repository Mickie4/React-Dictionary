import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled-components/global";
import { lightTheme, darkTheme } from "./styled-components/theme";
import {
  StyledBtn,
  StyledIcon,
  StyledHeader,
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledColLeft,
  StyledFooter,
  StyledLink,
} from "./styled-components/App-styling";
import Search from "./components/Search";
import sunIcon from "./icons/sun.png";
import moonIcon from "./icons/moon.png";

// The function that toggles between themes
export default function App() {
  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState(moonIcon);
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      setIcon(sunIcon);
    } else {
      setTheme("light");
      setIcon(moonIcon);
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledContainer className='app-container'>
          <StyledRow>
            <StyledColLeft>
              {" "}
              <StyledBtn onClick={toggleTheme}>
                <StyledIcon src={icon} alt='toggle icon' />
              </StyledBtn>
            </StyledColLeft>
            <StyledCol>
              <StyledHeader>React Dictionary</StyledHeader>
            </StyledCol>
          </StyledRow>
          <Search />
          <StyledCol>
            <StyledFooter>
              This project was coded by{" "}
              <StyledLink
                href='https://www.linkedin.com/in/webdev-michelle/'
                target='_blank'
                rel='noreferrer'>
                Michelle Morales
              </StyledLink>{" "}
              and is open-sourced on{" "}
              <StyledLink
                href='https://github.com/Mickie4/React-Dictionary'
                target='_blank'
                rel='noreferrer'>
                GitHub
              </StyledLink>{" "}
              and hosted on Netlify
            </StyledFooter>
          </StyledCol>
        </StyledContainer>
      </ThemeProvider>
    </div>
  );
}

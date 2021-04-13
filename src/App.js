import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled-components/global";
import { lightTheme, darkTheme } from "./styled-components/theme";
import {
  StyledBtn,
  StyledIcon,
  StyledHeader,
  StyledPromptText,
  StyledFooter,
  StyledLink,
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledColLeft,
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
            <StyledPromptText>
              What word do you want to look up?
            </StyledPromptText>
          </StyledCol>
        </StyledRow>
        {/* Search Component */}
        <Search />
        <StyledRow>
          <StyledFooter>
            {" "}
            <small>
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
                Github
              </StyledLink>{" "}
              and hosted on Netlify
            </small>
          </StyledFooter>
        </StyledRow>
      </StyledContainer>
    </ThemeProvider>
  );
}

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
          {/* Search Component */}
          <Search />
        </StyledContainer>
      </ThemeProvider>
    </div>
  );
}

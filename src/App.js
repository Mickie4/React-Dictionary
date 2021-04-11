import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled-components/global";
import { lightTheme, darkTheme } from "./styled-components/theme";
import {
  ToggleButton,
  IconImage,
  Header,
  PromptText,
} from "./styled-components/App-styling";
import Search from "./components/Search";
import Descriptions from "./components/Descriptions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      <Container className='mt-4'>
        <Row>
          <Col md={12} className='text-right'>
            <ToggleButton onClick={toggleTheme}>
              <IconImage src={icon} alt='toggle icon' />
            </ToggleButton>
          </Col>
          <Col md={12} className='text-center mt-3'>
            <Header className='px-3'>React Dictionary</Header>
            <PromptText>What word do you want to look up?</PromptText>
          </Col>
        </Row>
        <Search />
        <Descriptions />
      </Container>
    </ThemeProvider>
  );
}

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styled-components/theme";
import { GlobalStyles } from "./styled-components/global";
import { ToggleContainer } from "./styled-components/ToggleStyled";
import { IconImage } from "./styled-components/styledIconImage";
import { Input } from "./styled-components/styledForm";
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
            <ToggleContainer onClick={toggleTheme}>
              <IconImage src={icon} alt='toggle icon' />
            </ToggleContainer>
          </Col>
          <Col md={12} className='text-center mt-3'>
            <h1 className='px-3'>React Dictionary</h1>
            <h5>What word do you want to look up?</h5>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='d-block text-center mt-3'>
            <Input placeholder='Search for a word'></Input>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

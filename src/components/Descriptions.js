import React from "react";
import Meaning from "./Meaning";
import ImageGrid from "./ImagesGrid";
import Phonetics from "./Phonetics";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  StyledParagraph,
  Word,
} from "../styled-components/Descriptions-styling";
import { Section } from "../styled-components/Meaning-styling";

export default function Descriptions(props) {
  if (props.data) {
    return (
      <div className='descriptions'>
        <Container fluid className='mt-5'>
          <Row>
            <Col md={12}>
              <Section>
                <Word>{props.data.word}</Word>
                <StyledParagraph>
                  {props.data.phonetics[0].text}
                </StyledParagraph>
                <Phonetics audios={props.data.phonetics} />
              </Section>
              {props.data.meanings.map(function (meaning, index) {
                return (
                  <div key={index}>
                    <Meaning data={meaning} />
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
        <Section>
          <ImageGrid images={props.images} />
        </Section>
      </div>
    );
  } else {
    return null;
  }
}

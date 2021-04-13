import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Synonyms from "./Synonyms";
import {
  Title,
  Paragraph,
  Example,
  Section,
} from "../styled-components/Meaning-styling";

export default function Meaning(props) {
  return (
    <Section className='meaning'>
      <Container>
        <Row>
          <Col>
            <Title>{props.data.partOfSpeech}</Title>
            <Paragraph>{props.data.definitions[0].definition}</Paragraph>
            <Synonyms synonyms={props.data.definitions[0].synonyms} />
            Example: <Example>"{props.data.definitions[0].example}"</Example>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

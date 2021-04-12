import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Title,
  Paragraph,
  Example,
} from "../styled-components/Meaning-styling";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className='meaning'>
      <Container>
        <Title>{props.data.partOfSpeech}</Title>
        <Paragraph>{props.data.definitions[0].definition}</Paragraph>
        <Example>"{props.data.definitions[0].example}"</Example>
      </Container>
    </div>
  );
}

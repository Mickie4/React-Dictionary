import React from "react";
import Meaning from "./Meaning";
import ImageGrid from "./ImagesGrid";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Phonetics, Word } from "../styled-components/Descriptions-styling";

export default function Descriptions(props) {
  if (props.data) {
    return (
      <div className='descriptions'>
        <Container fluid className='mt-5'>
          <Row>
            <Col md={12}>
              <Word>{props.data.word}</Word>
              <Phonetics>{props.data.phonetics[0].text}</Phonetics>
              {props.data.meanings.map(function (meaning, index) {
                return (
                  <div key={index}>
                    <Meaning data={meaning} />
                  </div>
                );
              })}
            </Col>
          </Row>
          <Row>
            <ImageGrid images={props.images} />
          </Row>
        </Container>
      </div>
    );
  } else {
    return null;
  }
}

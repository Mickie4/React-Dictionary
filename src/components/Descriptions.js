import React from "react";
import Meaning from "./Meaning";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Descriptions(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className='descriptions'>
        <Container fluid className='mt-5'>
          <Row>
            <Col md={12}>
              <h1>{props.data.word}</h1>
              <p>{props.data.phonetics[0].text}</p>
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
      </div>
    );
  } else {
    return null;
  }
}

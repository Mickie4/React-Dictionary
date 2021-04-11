import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../icons/sunset1.jpg";

export default function Images() {
  return (
    <div className='Images'>
      <Container>
        <Row>
          <Col>
            <img src={image} alt='' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

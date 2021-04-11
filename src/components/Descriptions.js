import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Descriptions() {
  return (
    <div className='descriptions'>
      <Container fluid className='mt-5'>
        <Row>
          <Col md={12}>
            <h1>Sunset</h1>
            <p>/ˈsʌnsɛt/</p>
            <ul>
              <li>
                noun <br />
                <p>
                  the time in the evening when the sun disappears or daylight
                  fades.
                </p>
              </li>
              <li>
                adjective <br />
                <p>
                  denoting a legal provision under which a programme, agency,
                  regulation, etc., is automatically terminated at the end of a
                  fixed period unless renewed by legislative action.
                </p>
              </li>
            </ul>
            <ul>
              <li>Similar:</li>
              <li>nightfall</li>
              <li>twilight</li>
              <li>dusk</li>
              <li>evening</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

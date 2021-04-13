import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ImageGrid } from "../styled-components/ImagesGrid-styling";

export default function ImagesGrid(props) {
  if (props.images) {
    return (
      <Row>
        {props.images.map(function (image, index) {
          return (
            <Col key={index} md={4}>
              <a href={image.src.original} target='_blank' rel='noreferrer'>
                <ImageGrid src={image.src.tiny} alt='related to the search' />
              </a>
            </Col>
          );
        })}
      </Row>
    );
  } else {
    return null;
  }
}

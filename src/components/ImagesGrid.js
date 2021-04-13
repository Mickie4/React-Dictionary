import React from "react";
import Col from "react-bootstrap/Col";
import { ImageGrid } from "../styled-components/ImagesGrid-styling";

export default function ImagesGrid(props) {
  if (props.images) {
    return (
      <Col className='text-center'>
        {props.images.map(function (image, index) {
          return (
            <ImageGrid
              src={image.src.tiny}
              alt='related to the search'
              className='p-1'
              key={index}
            />
          );
        })}
      </Col>
    );
  } else {
    return null;
  }
}

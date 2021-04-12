import React from "react";
import Row from "react-bootstrap/Row";
import { StyledList } from "../styled-components/Synonyms-styling";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <Row>
        <ul className='synonyms d-inline'>
          {props.synonyms.map(function (synonym, index) {
            return (
              <StyledList key={index} className='d-inline p-2'>
                {synonym}
              </StyledList>
            );
          })}
        </ul>
      </Row>
    );
  } else {
    return null;
  }
}

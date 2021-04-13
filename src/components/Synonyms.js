import React from "react";
import {
  StyledList,
  StyledRow,
  StyledContainer,
} from "../styled-components/Synonyms-styling";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <StyledRow>
        <StyledContainer>
          {props.synonyms.map(function (synonym, index) {
            return (
              <div key={index}>
                <StyledList>{synonym}</StyledList>
              </div>
            );
          })}
        </StyledContainer>
      </StyledRow>
    );
  } else {
    return null;
  }
}

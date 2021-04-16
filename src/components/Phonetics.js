import React from "react";
import {
  StyledParagraph,
  StyledContainer,
} from "../styled-components/Phonetics-styling";

export default function Phonetics(props) {
  return (
    <div className='phonetics'>
      <StyledContainer>
        <StyledParagraph>{props.text}</StyledParagraph>
        <audio controls src={props.audios.audio}></audio>
      </StyledContainer>
    </div>
  );
}

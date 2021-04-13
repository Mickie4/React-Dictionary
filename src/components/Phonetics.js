import React from "react";
import {
  StyledLink,
  StyledParagraph,
  StyledContainer,
} from "../styled-components/Phonetics-styling";

export default function Phonetics(props) {
  return (
    <div className='phonetics'>
      {props.audios.map(function (audio, index) {
        return (
          <div className='grid' key={index}>
            <StyledParagraph>{props.text}</StyledParagraph>
            <StyledContainer>
              <StyledLink
                rel='noreferrer'
                href={props.audios[0].audio}
                target='_blank'>
                Listen
              </StyledLink>
            </StyledContainer>
          </div>
        );
      })}
    </div>
  );
}

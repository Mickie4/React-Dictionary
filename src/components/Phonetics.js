import React from "react";
import { StyledLink } from "../styled-components/Phonetics-styling";

export default function Phonetics(props) {
  return (
    <div className='phonetics'>
      {props.audios.map(function (audio, index) {
        return (
          <StyledLink
            rel='noreferrer'
            href={props.audios[0].audio}
            target='_blank'
            key={index}>
            Listen
          </StyledLink>
        );
      })}
    </div>
  );
}

import React from "react";
import Meaning from "./Meaning";
import ImageGrid from "./ImagesGrid";
import Phonetics from "./Phonetics";
import {
  StyledRow,
  StyledCol,
  StyledWord,
  Section,
} from "../styled-components/Descriptions-styling";

export default function Descriptions(props) {
  if (props.data) {
    return (
      <StyledRow className='descriptions'>
        <StyledCol>
          <Section>
            <StyledWord>{props.data.word}</StyledWord>

            {props.data.phonetics.map(function (audio, index) {
              return (
                <div key={index}>
                  <Phonetics
                    audios={audio}
                    text={props.data.phonetics[0].text}
                  />
                </div>
              );
            })}
          </Section>
        </StyledCol>
        <StyledCol>
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning data={meaning} />
              </div>
            );
          })}
        </StyledCol>
        <ImageGrid images={props.images} />
      </StyledRow>
    );
  } else {
    return null;
  }
}

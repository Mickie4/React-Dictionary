import React from "react";
import Meaning from "./Meaning";
import ImageGrid from "./ImagesGrid";
import Phonetics from "./Phonetics";
import {
  StyledRow,
  StyledCol,
  StyledWord,
  Section,
  StyledFooter,
  StyledLink,
} from "../styled-components/Descriptions-styling";

export default function Descriptions(props) {
  if (props.data) {
    return (
      <StyledRow className='descriptions'>
        <StyledCol>
          <Section>
            <StyledWord>{props.data.word}</StyledWord>
            <Phonetics
              audios={props.data.phonetics}
              text={props.data.phonetics[0].text}
            />
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
        <StyledCol>
          <StyledFooter>
            This project was coded by{" "}
            <StyledLink
              href='https://www.linkedin.com/in/webdev-michelle/'
              target='_blank'
              rel='noreferrer'>
              Michelle Morales
            </StyledLink>{" "}
            and is open-sourced on{" "}
            <StyledLink
              href='https://github.com/Mickie4/React-Dictionary'
              target='_blank'
              rel='noreferrer'>
              GitHub
            </StyledLink>{" "}
            and hosted on Netlify
          </StyledFooter>
        </StyledCol>
      </StyledRow>
    );
  } else {
    return null;
  }
}

import React from "react";
import Synonyms from "./Synonyms";
import {
  Title,
  Paragraph,
  Example,
  Section,
} from "../styled-components/Meaning-styling";

export default function Meaning(props) {
  return (
    <Section className='meaning'>
      <Title>{props.data.partOfSpeech}</Title>
      <Paragraph>{props.data.definitions[0].definition}</Paragraph>
      <Synonyms synonyms={props.data.definitions[0].synonyms} />
      Example: <Example>"{props.data.definitions[0].example}"</Example>
    </Section>
  );
}

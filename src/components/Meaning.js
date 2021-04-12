import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className='meaning'>
      <h3>{props.data.partOfSpeech}</h3>
      <p>{props.data.definitions[0].definition}</p>
      <p>{props.data.definitions[0].example}</p>
    </div>
  );
}

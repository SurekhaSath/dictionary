import React from "react";
import Example from "./Example.js";
import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong>
        {props.meaning.definition}
        <br />
        <Example exmaples={props.meaning.example}></Example> <br />
      </p>
      <Synonyms synonyms={props.meaning.synonyms}></Synonyms>
    </div>
  );
}

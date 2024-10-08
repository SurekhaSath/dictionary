import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";
export default function Results(props) {
  if (props.results)
    return (
      <div>
        <section>
          <h2>{props.word}</h2>
          <em>{props.results.phonetics}</em>
        </section>
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning}></Meaning>
              </section>
            );
          })}
        </section>
      </div>
    );
  else return null;
}

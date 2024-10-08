import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";
export default function Results(props) {
  console.log(props.results);
  if (props.results)
    return (
      <div>
        <section>
          <h2>{props.word}</h2>
        </section>
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning}></Meaning>
              </div>
            );
          })}
        </section>
      </div>
    );
  else return null;
}

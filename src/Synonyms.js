import React from "react";
export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        <strong>Synonyms</strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div>
              <li key={index}>{synonym}</li>
            </div>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}

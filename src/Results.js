import React from "react";
export default function Results(props) {
  if (props.results) return <p>Meaning : {props.results}</p>;
  else return null;
}

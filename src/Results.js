import React from "react";
export default function Results(props) {
  if (props.results) return <p>{props.results}</p>;
  else return null;
}

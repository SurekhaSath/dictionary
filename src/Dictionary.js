import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
export default function Dictionary() {
  let [serachword, setsearchword] = useState("");
  let [results, setresults] = useState(null);
  function search(event) {
    event.preventDefault();
    let apiurl = `https://api.shecodes.io/dictionary/v1/define?word=${serachword}&key=b437574c1146da7t8a94bof1824f6cc0`;
    axios.get(apiurl).then(dispalyresult);
  }
  function handleserachwordchange(event) {
    setsearchword(event.target.value);
  }
  function dispalyresult(response) {
    // console.log(response);
    setresults(response);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          palceholder="Enter a word "
          onChange={handleserachwordchange}
        ></input>
      </form>
      <Results results={results}></Results>
    </div>
  );
}

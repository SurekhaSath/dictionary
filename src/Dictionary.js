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
    setresults({
      meanings: response.data.meanings,
    });
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            palceholder="Enter a word "
            autoFocus
            onChange={handleserachwordchange}
          ></input>
        </form>
        <div className="hint">Suggested words:flower,rain,sunset etc</div>
      </section>
      <Results results={results} word={serachword}></Results>
    </div>
  );
}

import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
export default function Dictionary() {
  let [serachword, setsearchword] = useState("");
  let [results, setresults] = useState(null);
  let [photoresult, setphotoresult] = useState(null);
  function search(event) {
    event.preventDefault();
    let apiurl = `https://api.shecodes.io/dictionary/v1/define?word=${serachword}&key=b437574c1146da7t8a94bof1824f6cc0`;
    axios.get(apiurl).then(dispalyresult);
    let imageapi = `https://api.shecodes.io/images/v1/search?query=${serachword}&key=b437574c1146da7t8a94bof1824f6cc0`;
    axios.get(imageapi).then(displayimage);
  }
  function displayimage(response) {
    console.log(response);
    setphotoresult({ photos: response.data.photos });
  }
  function handleserachwordchange(event) {
    setsearchword(event.target.value);
  }
  function dispalyresult(response) {
    console.log(response);
    setresults({
      meanings: response.data.meanings,
      phonetics: response.data.phonetic,
    });
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Type in the word you need to know the meaning for "
            autoFocus
            onChange={handleserachwordchange}
          ></input>
        </form>
        <div className="hint">Suggested words: flower, rain, sunset etc</div>
      </section>
      <Results results={results} word={serachword}></Results>
      <Photos photos={photoresult} />
    </div>
  );
}

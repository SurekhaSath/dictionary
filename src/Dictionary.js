import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
export default function Dictionary() {
  let [serachword, setsearchword] = useState(null);
  let [meaning, setmeaning] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${serachword}`);
  }
  function handleserachwordchange(event) {
    setsearchword(event.target.value);
  }
  function dispalyresult(response) {
    console.log(response);
    setmeaning(response.data.meanings[0].definition);
  }
  let apiurl = `https://api.shecodes.io/dictionary/v1/define?word=${serachword}&key=b437574c1146da7t8a94bof1824f6cc0`;
  axios.get(apiurl).then(dispalyresult);
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          palceholder="Enter a word "
          onChange={handleserachwordchange}
        ></input>
        <input type="submit" value="search"></input>
      </form>
      <p>{meaning}</p>
    </div>
  );
}

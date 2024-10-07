import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  let [serachword, setsearchword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${serachword}`);
  }
  function handleserachwordchange(event) {
    setsearchword(event.target.value);
  }
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
    </div>
  );
}

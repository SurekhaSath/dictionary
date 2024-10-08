import React from "react";
import "./Photos.css";
export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    console.log(props.photos.photos[0].url);
    return (
      <section>
        <div className="grid-container">
          {props.photos.photos.map(function (photo, index) {
            return (
              <div className="grid-item" key={index}>
                <img
                  src={props.photos.photos[index].src.landscape}
                  alt="keywordimage"
                ></img>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

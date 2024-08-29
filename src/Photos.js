import React from "react";
import "./Photos.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="photos">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    className="img-fluid"
                    src={photo.src.landscape}
                    alt={props.word}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

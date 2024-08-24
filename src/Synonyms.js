import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <em>Synonyms: </em>
        {props.synonyms.map((synonym, index) => {
          return <span key={index}>{synonym}, </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}

import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <em>Similar: </em>
        {props.synonyms.map((synonym, index) => {
          if (index === props.synonyms.length - 1) {
            return <span key={index}>{synonym} </span>;
          } else {
            return <span key={index}>{synonym}, </span>;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}

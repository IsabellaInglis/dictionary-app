import React from "react";
import "./KeywordData.css";
import Meaning from "./Meaning";

export default function KeywordData(props) {
  return (
    <div className="KeywordData">
      <h1>{props.keywordData.word}</h1>
      <h2>{props.keywordData.phonetic}</h2>
      {props.keywordData.meanings.map((meaning, index) => {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}

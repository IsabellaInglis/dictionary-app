import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>
          <em>Meaning:</em> {props.meaning.definition}
          <div className="example">{props.meaning.example}</div>
        </p>
        <p className="synonym">
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </section>
    </div>
  );
}

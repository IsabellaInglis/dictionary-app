import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <div>
          <em>Meaning:</em> {props.meaning.definition}
          <div className="example">{props.meaning.example}</div>
          <br />
        </div>
        <div className="synonym">
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </section>
    </div>
  );
}

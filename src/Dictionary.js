import { SearchRounded } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import KeywordData from "./KeywordData";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [loaded, setLoaded] = useState(false);

  let form = (
    <div style={{ height: "80%", width: "90%" }}>
      <TextField
        variant="filled"
        className="search-bar"
        placeholder={"Search for any word..."}
        value={keyword}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search();
          }
        }}
        onChange={(event) => setKeyword(event.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton
              style={{
                color: "pink",
                height: "30px",
                width: "30px",
              }}
              onClick={search}
            >
              <SearchRounded />
            </IconButton>
          ),
          disableUnderline: true,
        }}
      />
    </div>
  );

  function displayKeywordData(response) {
    setLoaded(true);
    console.log(response.data);
  }

  function search(event) {
    let apiKey = "dc6760cf7088c245e5a42a646bco203t";
    let word = keyword;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;

    axios.get(apiUrl).then(displayKeywordData);
  }

  if (loaded) {
    return (
      <div className="search-container">
        {form}
        <KeywordData />
      </div>
    );
  } else {
    return <div className="search-container">{form}</div>;
  }
}

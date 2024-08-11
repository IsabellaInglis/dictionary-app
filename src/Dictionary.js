import { SearchRounded } from "@mui/icons-material";
import { IconButton, Input } from "@mui/material";
import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function displayKeywordData(response) {
    console.log(response.data);
  }

  function search(event) {
    let apiKey = "dc6760cf7088c245e5a42a646bco203t";
    let word = keyword;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;

    axios.get(apiUrl).then(displayKeywordData);
  }

  return (
    <div className="search-container">
      <div style={{ height: "80%", width: "90%" }}>
          className="search-bar"
          disableUnderline
          placeholder={"Search for any word..."}
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          endAdornment={
            <IconButton
              style={{ color: "pink", height: "30px", width: "30px" }}
              onClick={Search}
            >
              <SearchRounded />
            </IconButton>
          }
        />
      </div>
    </div>
  );
}

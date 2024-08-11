import { SearchRounded } from "@mui/icons-material";
import { IconButton, Input } from "@mui/material";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function Search(event) {
    event.preventDefault();
    console.log(keyword);
  }

  return (
    <div className="search-container">
      <div style={{ height: "80%", width: "90%" }}>
        <Input
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

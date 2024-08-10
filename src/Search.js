import { SearchRounded } from "@mui/icons-material";
import { IconButton, Input } from "@mui/material";
import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search-container">
      <div style={{ height: "80%", width: "90%" }}>
        <Input
          className="input"
          disableUnderline
          value={"Search for any word..."}
          endAdornment={
            <IconButton
              label="Outlined"
              style={{ color: "pink", height: "30px", width: "30px" }}
            >
              <SearchRounded />
            </IconButton>
          }
        />
      </div>
    </div>
  );
}

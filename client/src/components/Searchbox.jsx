import React from "react";
import "./Searchbox.scss";
import { TextField, Button } from "@mui/material";

function Searchbox({ onClick, rowButton }) {
  return (
    <div className={`${rowButton ? "searchRow" : "searchbox"}`}>
      {" "}
      {/* if rowbutton is true as a prop, we display search as a row */}
      <TextField
        className="textfield"
        id="search"
        label="Search a product"
        variant="outlined"
        id="search"
        color="white"
      />
      <Button
        variant="contained"
        onClick={(e) => onClick(document.getElementById("search").value)}
        id="ecofy"
        color="lightgreen"
        sx={{ width: "7em" }}
      >
        Eco-fy
      </Button>
    </div>
  );
}

export default Searchbox;

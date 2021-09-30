import React, { useState } from "react";
import "./Home.scss";

import { TextField, Button } from "@mui/material";



const Home = ({ onClick }) => {

  return (
    <div className="main">
      <h1>Greenthumb</h1>
    
      <TextField
        className="textfield"
        id="standard-basic"
        label="Search a product"
        variant="outlined"
        id="search"
        color="white"
      />

      <Button
        variant="contained"
        onClick={(e) => onClick(document.getElementById("search").value)}
        id="ecofy"
        color='lightgreen'
        sx={{width : '7em',}}
      >
        Eco-fy
      </Button>
    </div>
  );
};

export default Home;


import React, { useState } from "react";
import "./Home.scss";
import { useHistory } from "react-router-dom";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const Home = ({ onClick }) => {
  const history = useHistory();

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
      >
        Eco-fy
      </Button>
    </div>
  );
};

export default Home;

{
  /* <input
id="search"
className="search"
type="text"
placeholder="Search a product"
name="search"
/> */
}

{
  /* <SearchBar
value={this.state.value}
id="search"
onChange={(newValue) => this.setState({ value: newValue })}
onRequestSearch={() => doSomethingWith(this.state.value)}
/> */
}

//console.log(document.getElementById("search").value)
//onClick(document.getElementById("search").value)

{
  /* <SearchBox onClick={onClick}/> */
}
//<input type="search" className='search' placeholder="Search a product..."/>

// return (
//   <div className='main'>
//     <h1>Greenthumb</h1>
//       <input
//       id="search"
//       class="search"
//       type="text"
//       placeholder="Search a product"
//       name="search"
//       value={values.search}
//       onChange={handleSearchInputChange}
//      />
//       <button onClick={(e) => onClick()}>Eco-fy</button>
//   </div>
// )

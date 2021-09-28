import "./App.scss";
import useApplicationData from "./useApplicationData";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar";
import Login from "./components/Login/Login";

const axios = require("axios");

const App = () => {
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));

  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (input) => {
    setSearchVal(input);
  };

  // // set up the request parameters
  // const params = {
  //   api_key: "7A17E1E16821475095E29C0A7A5F9190",
  //   type: "search",
  //   amazon_domain: "amazon.com",
  //   search_term: "eco-friendly",
  //   category_id: "15342811"
  // }

  // // make the http GET request to Rainforest API
  // axios.get('https://api.rainforestapi.com/request', { params })
  //   .then(response => {

  //     // print the JSON response from Rainforest API
  //     console.log(JSON.stringify(response.data, 0, 2));

  //   }).catch(error => {
  //     // catch and print the error
  //     console.log(error);
  //   })

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />

          {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Home onClick={handleSearch}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

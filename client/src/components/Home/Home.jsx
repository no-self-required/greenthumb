import React, { useState } from "react";
import "./Home.scss";

import { useHistory } from "react-router-dom";
import axios from "axios";

import Searchbox from "../Searchbox";
import Navbar from "../Navbar";

import { CircularProgress } from "@mui/material";

import { useContext } from "react";
import useApplicationData from "../../useApplicationData";
import { authContext } from "../Providers/AuthProvider";

const Home = () => {
  const [loading, setLoading] = useState(false);

  //login
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));
  const { auth, user, logout } = useContext(authContext);

  const history = useHistory();

  const handleSearch = (input) => {
    setLoading(true);
    const params = {
      method: "GET",
      url: "https://amazon24.p.rapidapi.com/api/product",
      params: {
        categoryID: "aps",
        page: "1",
        country: "US",
        filter:
          "aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zP2s9aXBob25lJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQVVzZWQmZGMmcWlkPTE2MTI0MTg5NTMmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8y",
        keyword: `eco friendly ${input}`,
      },
      headers: {
        "x-rapidapi-host": "amazon24.p.rapidapi.com",
        "x-rapidapi-key": "3cc3b85d09msh2e9a0df57326101p185615jsn2402a0cb5536",
      },
    };

    axios
      .request(params)
      .then(function (response) {
        history.push("/products", { props: response.data.docs });
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="home">
      <Navbar auth={auth} user={user} logout={logout} />
      <div className="main">
        <h1>Greenthumb</h1>
        <Searchbox onClick={handleSearch} rowButton={false} />       
        {loading === true && (
          <div id="loading">
            <CircularProgress color="success" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

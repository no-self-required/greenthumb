import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import Navbar from "../Navbar";
import Searchbox from "../Searchbox";
import "./Products.scss";
import Sidebar from "./Sidebar";
import SingleProduct from "./SingleProduct";
import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import { CircularProgress } from "@mui/material";
import useApplicationData from "../../useApplicationData";

function Products() {
  //loading icon logic
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

  const location = useLocation();
  const productsArray = location.state.props.slice(0, 9);

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

  const products = productsArray.map((i, index) => {
    return (
      <div className="singProduct">
        <SingleProduct
          key={index}
          name={i.product_title}
          price={i.app_sale_price}
          rating={i.evaluate_rate}
          img={i.product_main_image_url}
          details={i.product_detail_url}
        />
      </div>
    );
  });

  return (
    <div className="product_page">
      <div className="column1">
        <Navbar auth={auth} user={user} logout={logout} />
        <div id="prodSearchbox">
          <Searchbox rowButton={true} onClick={handleSearch} />
          {loading === true && (
            <div id="prodLoading">
              <CircularProgress color="success" />
            </div>
          )}
        </div>

        <div className="layout">
          <div className="products">{products}</div>
        </div>
      </div>
      <div className="column2">
        <Sidebar />
      </div>
    </div>
  );
}

export default Products;

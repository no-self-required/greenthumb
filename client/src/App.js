import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@mui/material";

import { useContext } from "react";
import { authContext } from "./components/Providers/AuthProvider";

import useApplicationData from "./useApplicationData";

import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar";
import Shops from "./components/Shops/Shops";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#43a047",
    },
    secondary: {
      main: "#1b5e20",
    },
    lightgreen: {
      main: "#64c264",
    },
    white: {
      main: "#ffffff",
    },
  },
  shape: {
    borderRadius: 15,
  },
});

const App = () => {
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));

  //login
  const { auth, user, logout } = useContext(authContext);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/shops">
              <Shops />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              {!auth && <Login />}
              {auth && <Home />}
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

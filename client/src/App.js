import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@mui/material";
import { useContext, useState } from "react";
import { authContext } from "./components/Providers/AuthProvider";
import useApplicationData from "./useApplicationData";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Shops from "./components/Shops/Shops";
import Blog from './components/Blog/Blog';
import Create from './components/Blog/SinglePost/Create';
import SinglePost from './components/Blog/SinglePost/SinglePost';

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

  const [posts, setPosts] = useState([]);

  //login
  const { auth, user, logout } = useContext(authContext);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/blog">
              <Blog 
                posts={posts}
              />
            </Route>
            <Route path="/singlepage">
              <SinglePost />
            </Route>
            <Route path="/create">
              <Create 
                user={user}
              />
            </Route>
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

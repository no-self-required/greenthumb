import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@mui/material";

import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";


const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#1b5e20',
    },
    lightgreen: {
      main: '#64c264'
    },
    white: {
      main: '#ffffff'
    }
  },
  shape: {
    borderRadius: 15,
  }, 
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
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
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>  
    </ThemeProvider>
  );
};

export default App;

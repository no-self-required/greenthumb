import { React, useState, useContext } from "react";
import "./Login.scss";
import { TextField, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { authContext } from '../Providers/AuthProvider';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);

  const onEmailChange = function(event) {
    setEmail(event.target.value);
  };

  const onPasswordChange = function(event) {
    setPassword(event.target.value);
  };

  const onSubmit = function(event) {
    console.log('onSubmit');
    console.log('EMAIL----',email);
    console.log('PASSWORD----',password);
    event.preventDefault();
    if (email)
      login(email, password);
  };

  return (
    <div className="user">
      <h1 id="h1login">Login</h1>
      <form className="loginform" onSubmit={onSubmit}>
        <div id="un">
          <TextField
            id="outlined"
            className="unshadow"
            label="Email"
            value={email}
            fullWidth
            onChange={onEmailChange}
            color="white"
          />
        </div>
        <div id="pw">
          <TextField
            className="pwshadow"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            value={password}
            color="white"
            onChange={onPasswordChange}
          />
        </div>
        <div id="logbutton">
          <Button variant="contained" className="btn" type="submit" name="commit" fullWidth>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;

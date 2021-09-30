import React from "react";
import "./Login.scss";
import { TextField, Button } from "@mui/material";


function Login() {
  return (
    <div class="user">
      <h1 id="h1login">Login</h1>
      <form class="loginform">
        <div id="un">
          <TextField id="outlined" className="unshadow"label="Username" fullWidth color="white" />
        </div>
        <div id="pw">
          <TextField
            className="pwshadow"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            color="white"
          />
        </div>
        <Button variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;

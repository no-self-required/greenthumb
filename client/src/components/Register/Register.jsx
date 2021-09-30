import React from "react";
import "./Register.scss";
import { TextField, Button } from "@mui/material";

function Register() {
  return (
    <div className="reguser">
      <h1 id="h1reg">Register</h1>
      <form className="regform">
        <div id="un">
          <TextField
            required
            id="outlined"
            label="Username"
            fullWidth
            color="white"
          />
        </div>

        <div id="em">
          <TextField required id="email" label="Email" fullWidth color="white" />
        </div>

        <div id="city">
          <TextField id="email" label="City" fullWidth color="white" />
        </div>

        <div id="twt">
          <TextField id="twitter" label="Twitter" fullWidth color="white" />
        </div>

        <div id="fb">
          <TextField id="facebook" label="Facebook" fullWidth color="white" />
        </div>

        <div id="regpw">
          <TextField
            required
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            color="white"
          />
        </div>

        <Button variant="contained" fullWidth>
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;

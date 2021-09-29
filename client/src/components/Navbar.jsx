import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.scss";

// import { ReactDOM } from 'react';
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 400,
  bgcolor: "lightgreen.main",
  border: "1px solid #FFF",
  borderRadius: "20px",
  boxShadow: "0px 0px 15px 1px rgb(249, 249, 249)",
};

const regStyle = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 600,
  bgcolor: "lightgreen.main",
  border: "1px solid #FFF",
  borderRadius: "20px",
  boxShadow: "0px 0px 15px 1px rgb(249, 249, 249)",
};

function Navbar() {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <nav>
      <div className="nav">
        <Button
          variant="outline"
          onClick={() => history.push("/ideas")}
          id="ideas"
          sx={{
            color: "white",
          }}
        >
          ideas
        </Button>
        <Button
          variant="outline"
          onClick={handleOpen}
          sx={{
            color: "white",
          }}
        >
          Login
        </Button>
        <Button variant="outline" onClick={handleOpen2}>
          Signup
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="loginbox">
          <div class="user">
            <h1>Login</h1>
            <form class="form">
              <div id="un">
                <TextField id="outlined" label="Username" fullWidth />
              </div>
              <div id="pw">
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  fullWidth
                />
              </div>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={regStyle} className="regbox">
          <div class="user">
            <h1>Register</h1>
            <form class="form">
              <div id="un">
                <TextField id="outlined" label="Username" fullWidth />
              </div>

              <div id="em">
                <TextField id="email" label="Email" fullWidth/>
              </div>

              <div id="city">
                <TextField id="email" label="City" fullWidth/>
              </div>

              <div id="twt">
                <TextField id="twitter" label="Twitter" fullWidth/>
              </div>

              <div id="fb">
                <TextField id="facebook" label="Facebook" fullWidth/>
              </div>

              <div id="regpw">
                <TextField
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  fullWidth
                />
              </div>

              <Button variant="contained" fullWidth>
                Register
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </nav>
  );
}

// ReactDOM.render(<Navbar />, document.querySelector('#navbar'));

export default Navbar;

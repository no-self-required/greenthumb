import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.scss";

import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { Modal, Box, IconButton } from "@mui/material";

import Login from "./Login/Login";
import Register from "./Register/Register";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

//Styling override for login modal popup
const style = {
  position: "absolute",
  top: "33%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 350,
  bgcolor: "lightgreen.main",
  border: "1px solid #FFF",
  borderRadius: "20px",
  boxShadow: "0px 0px 15px 1px rgb(249, 249, 249)",
};

//Styling override for register modal popup
const regStyle = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 600,
  bgcolor: "lightgreen.main",
  border: "1px solid #FFF",
  borderRadius: "20px",
  boxShadow: "0px 0px 15px 1px rgb(249, 249, 249)",
};

function Navbar(props) {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  if (!props.auth) {
    return (
      <nav>
        <div className="nav">
          <Stack direction="row-reverse">
            <Button
              variant="contained"
              onClick={handleOpen2}
              sx={{ width: "5em" }}
            >
              Signup
            </Button>
            <Button
              variant="outlined"
              disableElevation
              onClick={handleOpen}
              color="white"
              sx={{ width: "5em" }}
            >
              Login
            </Button>
          </Stack>
        </div>
        <Modal open={open}>
          <Box sx={style} className="loginbox">
            <div id="closeIcon">
              <IconButton color="white" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <Login></Login>
          </Box>
        </Modal>
        <Modal open={open2}>
          <Box sx={regStyle} className="regbox">
            <div id="closeIcon">
              <IconButton color="white" onClick={handleClose2}>
                <CloseIcon />
              </IconButton>
            </div>
            <Register></Register>
          </Box>
        </Modal>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="nav">
          <Stack direction="row-reverse">
            <Button 
              variant="contained" 
              onClick={props.logout}
              sx={{ width: "5em", fontWeight: "medium"}}
              >
              Logout
            </Button>
            <div id="unNav">
              <Typography>Hello, {props.user.username}</Typography>
            </div>
            <Button
              variant="outline"
              onClick={() => history.push("/blog")}
              id="ideas"
              sx={{ width: "5em", fontWeight: "medium"}}
            >
              ideas
            </Button>
            <Button
              variant="outline"
              onClick={() => history.push("/shops")}
              id="shops"
              sx={{ width: "5em", fontWeight: "medium"}}
            >
              shops
            </Button>
            <Button
              variant="outline"
              onClick={() => history.push("/")}
              id="homeButton"
              sx={{ width: "5em", fontWeight: "medium"}}
            >
              home
            </Button>
          </Stack>
        </div>
        <Modal open={open2}>
          <Box sx={regStyle} className="regbox">
            <div id="closeIcon">
              <IconButton color="white" onClick={handleClose2}>
                <CloseIcon />
              </IconButton>
            </div>
            <Register></Register>
          </Box>
        </Modal>
      </nav>
    );
  }
}

export default Navbar;

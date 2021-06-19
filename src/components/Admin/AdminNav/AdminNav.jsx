import { AppBar, Button, makeStyles, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopupWrapper from "../../PopupWrapper";
import UserDialog from "../UserList/UserDialog/UserDialog";

const useStyles = makeStyles((theme) => ({
  appbar: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1vh 1vw 1vh 1vw",
    backgroundColor: blue[900],
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  logoutButton: {
    color: "white",
    backgroundColor: blue[800],
    borderColor: "white",
  },
  welcome: { color: "white" },
}));

export default function AdminNav({ handleLogout, currentUser, admin }) {
  const classes = useStyles();
  const [chatOpen, setChatOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <AppBar className={classes.appbar}>
        <Link to="/" className={classes.link}>
          <Button className={classes.link}>
            <Typography>CWC 50th Admin Panel</Typography>
          </Button>
        </Link>
        {admin ? (
          <Typography className={classes.welcome}>
            Hi{" "}
            <Button
              className={classes.welcome}
              variant="outlined"
              onClick={(e) => {
                setChatOpen((prev) => !prev);
                setAnchorEl(e.currentTarget);
              }}
            >
              {currentUser.firstname}
            </Button>
            !
          </Typography>
        ) : null}
        <Button
          className={classes.logoutButton}
          variant="outlined"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </AppBar>
      <PopupWrapper open={chatOpen} anchorEl={anchorEl} placement="bottom">
        <UserDialog />
      </PopupWrapper>
    </>
  );
}

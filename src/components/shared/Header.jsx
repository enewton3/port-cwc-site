import React from "react";
import { makeStyles } from "@material-ui/core";
import CWCLogo from "../CWCLogo";
// import BMCLogo from "../BMCLogo";
// import EventLogo from "../EventLogo";
// import logo from "../../assets/cancer_center_logo.png";
// import headerfriends from "../../assets/headerfriendslogo.png";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "white",
    height: "10vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    zIndex: "1000",
    boxShadow: "0px 2px 2px grey",
  },
  container: {
    marginLeft: "2vw",
    width: "50%",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <CWCLogo />
      </div>
    </div>
  );
}

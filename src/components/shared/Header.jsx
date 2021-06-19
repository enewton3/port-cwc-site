import React from "react";
import { makeStyles } from "@material-ui/core";
import BMCLogo from "../BMCLogo";
import EventLogo from "../EventLogo";
// import logo from "../../assets/cancer_center_logo.png";
// import headerfriends from "../../assets/headerfriendslogo.png";

const useStyles = makeStyles((theme) => ({
  header: {
    // backgroundColor: "rgb(0,0,0)",
    // height: "10vh",
    width: "100vw",
    // position: "fixed",
    // height: "10vh",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1000",
    // padding: "1vh",
  },
  container: {
    width: "98%",
    height: "10vh",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1vh",
    "@media (max-width: 1330px)": { height: "8vh" },
    "@media (max-width: 1060px)": { height: "7vh" },
    "@media (max-width: 926px)": { height: "5vh" },
    "@media (max-width: 380px)": { height: "4vh" },
  },
  logoLeft: {
    width: "30vw",
    // "@media (max-width: 450px)": { width: "30%" },
  },
  logoRight: {
    width: "15vw",
    // "@media (max-width: 1200px)": { width: "60%" },
    // "@media (max-width: 750px)": { width: "50%" },
    // "@media (max-width: 490px)": { width: "40%" },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logoLeft}>
          <EventLogo />
        </div>
        <div className={classes.logoRight}>
          <BMCLogo />
        </div>
      </div>
    </div>
  );
}

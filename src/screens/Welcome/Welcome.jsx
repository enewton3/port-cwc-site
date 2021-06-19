import { makeStyles } from "@material-ui/core";
import React from "react";
import BMCLogo from "../../components/BMCLogo";
import HeaderLogo from "../../components/HeaderLogo";
import LoginForm from "../../components/LoginForm";

const useStyles = makeStyles((theme) => ({
  welcome: {
    display: "flex",
    flexFlow: "column nowrap",
    // margin: "0 auto",
    paddingTop: "2vh",
    width: "100vw",
    height: "90%",
    textAlign: "center",
    alignItems: "center",
    // justifyContent: "space-evenly",
  },
  blurb: {
    margin: "10vh 0 10vh 0 ",
    fontFamily: "Helvetica",
  },
  logo: {
    position: "absolute",
    right: 5,
    bottom: 2,
    width: "20vw",
  },
}));

export default function Welcome({ loginGuest, setCurrentGuest }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.welcome}>
        <HeaderLogo />
        <LoginForm loginGuest={loginGuest} />
      </div>
      <div className={classes.logo}>
        <BMCLogo />
      </div>
    </>
  );
}

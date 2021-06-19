import { makeStyles } from "@material-ui/core";
import React from "react";
import LoginForm from "../../components/LoginForm";
import Header from "../../components/shared/Header";

const useStyles = makeStyles((theme) => ({
  welcome: {
    display: "flex",
    flexFlow: "column nowrap",
    width: "100vw",
    height: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
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
      <Header />
      <div className={classes.welcome}>
        <LoginForm loginGuest={loginGuest} />
      </div>
    </>
  );
}

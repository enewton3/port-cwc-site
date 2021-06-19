import { makeStyles, Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import React from "react";
import EventLogo from "./EventLogo";

const useStyles = makeStyles((theme) => ({
  text: { color: purple[800], fontSize: "1.2rem" },
}));

export default function HeaderLogo() {
  const classes = useStyles();
  return (
    <>
      <EventLogo />
      <Typography className={classes.text}>
        Thursday, June 17th, 2021 <br /> 6:00pm
      </Typography>
    </>
  );
}

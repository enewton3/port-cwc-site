import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const useStyles = makeStyles((theme) => ({
  button: {
    position: "absolute",
    right: "1vw",
    top: "12vh",
    background: "white",
    color: "black",
    "&:hover": { background: "#CBCACA" },
  },
}));

export default function SupportButton({ handleOpen }) {
  const classes = useStyles();

  return (
    <IconButton className={classes.button} onClick={(e) => handleOpen(e)}>
      <HelpOutlineIcon />
    </IconButton>
  );
}

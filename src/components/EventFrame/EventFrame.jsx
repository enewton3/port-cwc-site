import React from "react";
import { makeStyles } from "@material-ui/core";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "70vw",
    display: "flex",
    "@media (max-width: 1024px)": { width: "80vw" },
    "@media (max-width: 768px)": { width: "90vw" },
    "@media (max-width: 480px)": { width: "100vw" },
  },
  vimeoframe: {
    width: "100%",
    // height: "73%",
    // aspectRatio: "16/9",
    // "@media only screen and (min-device-width: 375px) and (max-device-width: 850px) and (orientation: landscape)":
    //   { width: "100%", height: "100%" },
  },
}));

export default function EventFrame() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.vimeoframe}>
        <VimeoFrame />
      </div>
    </div>
  );
}
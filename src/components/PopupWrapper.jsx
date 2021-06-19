// import classes from "*.module.css";
import {
  ClickAwayListener,
  Grow,
  makeStyles,
  Paper,
  Popper,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  popper: {
    // display: open ? "block" : "none",
    // maxHeight: "40vh",
    // maxWidth: "30vw",
    zIndex: "2000",
  },
  paper: {
    // height: "50vh",
    width: "40vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default function PopupWrapper(props) {
  const { children, open, anchorEl, handleClose, clickAway, placement } = props;

  const classes = useStyles();

  const withClickAway = (
    <ClickAwayListener onClickAway={handleClose}>
      <Paper style={{ width: "50vw", height: "90vh" }}>{children}</Paper>
    </ClickAwayListener>
  );

  const noClickAway = <Paper className={classes.paper}>{children}</Paper>;

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      transition
      disablePortal
      // keepMounted
      className={classes.popper}
      placement={placement}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          {clickAway ? withClickAway : noClickAway}
        </Grow>
      )}
    </Popper>
  );
}

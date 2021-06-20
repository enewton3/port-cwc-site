import { makeStyles } from "@material-ui/core";
// import { useHistory } from "react-router-dom";
import Header from "../../components/shared/Header";
import EventFrame from "../../components/EventFrame/EventFrame";
import Fifty from "../../components/Fifty";
import SupportButton from "../../components/Support/SupportButton";
import { useState } from "react";
import SupportPopUp from "../../components/Support/SupportPopUp";

const useStyles = makeStyles((theme) => ({
  event: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
}));

export default function Event({ currentGuest }) {
  const classes = useStyles();
  const [supportOpen, setSupportOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // if (!currentGuest) {
  //   history.push("/");
  // }

  const handleOpen = (e) => {
    setSupportOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setSupportOpen(false);
  };

  return (
    <>
      <Header />
      <div className={classes.event}>
        <EventFrame />
      </div>
      <SupportButton handleOpen={handleOpen} />
      <SupportPopUp
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={supportOpen}
      />
      <Fifty />
    </>
  );
}

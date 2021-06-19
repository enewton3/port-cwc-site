import { makeStyles } from "@material-ui/core";
// import { useHistory } from "react-router-dom";
import Header from "../../components/shared/Header";
import EventFrame from "../../components/EventFrame/EventFrame";
// import { useState } from "react";

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
  // const history = useHistory();
  // const [donateOpen, setDonateOpen] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);

  // if (!currentGuest) {
  //   history.push("/");
  // }

  // const handleClose = () => {
  //   setDonateOpen(false);
  // };

  return (
    <>
      <Header />
      <div className={classes.event}>
        <EventFrame />
      </div>
    </>
  );
}

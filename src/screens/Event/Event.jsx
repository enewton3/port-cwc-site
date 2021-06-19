import { Button, makeStyles } from "@material-ui/core";
// import { useHistory } from "react-router-dom";
import Header from "../../components/shared/Header";
import EventFrame from "../../components/EventFrame/EventFrame";
import { useState } from "react";
import DonateForm from "../../components/DonateForm";
import PopupWrapper from "../../components/PopupWrapper";
import Sponsors from "../../components/Sponsors";

const useStyles = makeStyles((theme) => ({
  event: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "3vh",
    // height: "85vh",
  },
  donateblurb: {
    color: "black",
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "2vh 0 2vh 0",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "1vh",
    "@media (min-width: 1345px)": {
      position: "fixed",
      bottom: 0,
      justifyContent: "space-between",
      margin: "0 1vw 1vh 1vw",
    },
  },
  link: { textDecoration: "none" },
  donateButton: {
    backgroundColor: "rgb(250, 210, 70)",
    minWidth: "25vh",
    cursor: "pointer",
    color: "rgb(100, 150, 195)",
    fontSize: "1.2rem",
    // marginTop: "5vh",
    "&:hover": {
      // backgroundColor: "rgb(250, 210, 70)",
      backgroundColor: theme.palette.primary.light,
      color: "white",
    },
  },
}));

export default function Event({ currentGuest }) {
  const classes = useStyles();
  // const history = useHistory();
  const [donateOpen, setDonateOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // if (!currentGuest) {
  //   history.push("/");
  // }

  const handleClose = () => {
    setDonateOpen(false);
  };

  return (
    <>
      <Header />
      <div className={classes.event}>
        <EventFrame />
        <div className={classes.donateblurb}>
          To Donate, text bmcgala25 to 4-1444
        </div>
        <div className={classes.buttonContainer}>
          <Button
            // variant="outlined"
            className={classes.donateButton}
            onClick={(e) => {
              setDonateOpen((prev) => !prev);
              setAnchorEl(e.currentTarget);
            }}
          >
            DONATE
          </Button>
          <a
            href="http://www.development.bmc.org/2021-gala-program-book"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            <Button className={classes.donateButton}>Program Book</Button>
          </a>
        </div>
        <Sponsors />
        <PopupWrapper
          anchorEl={anchorEl}
          open={donateOpen}
          handleClose={handleClose}
          clickAway={true}
          placement="bottom"
        >
          <DonateForm />
        </PopupWrapper>
      </div>
    </>
  );
}

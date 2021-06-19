import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { states } from "../services/states";

const useStyles = makeStyles((theme) => ({
  loginform: {
    display: "flex",
    flexFlow: "column wrap",
    width: "50%",
    maxHeight: "45vh",
    justifyContent: "space-evenly",
    "@media (max-width: 600px)": { width: "80%" },
    "@media (max-width: 400px)": { width: "100%" },
  },
  names: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  firstNameInput: {
    color: "white",
    background: "white",
    width: "50%",
  },
  lastNameInput: {
    color: "white",
    background: "white",
    width: "50%",
    marginLeft: "1vw",
  },
  input: {
    color: "white",
    background: "white",
    marginTop: "1vh",
    // width: "100%",
  },
  button: {
    background: theme.palette.primary.main,
    color: "white",
    margin: "1vh auto",
    fontSize: "1rem",
    boxShadow: "2px 2px 5px black",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: "#FFF",
    },
  },
  checkboxes: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    textAlign: "center",
    fontSize: ".8rem",
  },
  checkboxLabels: { fontSize: ".8rem" },
  address: {
    width: "100%",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "1vh",
  },
  addressinput: {
    width: "100%",
    background: "white",
  },
  addressChild: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "1vh",
  },
  address2input: {
    width: "33%",
    background: "white",
  },
  stateSelect: {
    width: "30%",
    background: "white",
    textAlign: "center",
  },
  zipInput: {
    width: "20%",
    background: "white",
    textAlign: "left",
  },
}));

export default function LoginForm({ loginGuest }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
  });

  const [addressToggle, setAddressToggle] = useState(false);
  const [comm_opt, setCommOpt] = useState(true);

  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // e.preventDefault();
    const guest = { ...formData, comm_opt: comm_opt };
    loginGuest(guest);
  };

  return (
    <>
      <form className={classes.loginform}>
        <div className={classes.names}>
          <TextField
            className={classes.firstNameInput}
            variant="filled"
            label="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            className={classes.lastNameInput}
            variant="filled"
            label="Last Name"
            name="lastname"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <TextField
          className={classes.input}
          variant="filled"
          label="Email"
          name="email"
          type="email"
          onChange={(e) => handleChange(e)}
          required
        />
        {addressToggle ? (
          <div className={classes.address}>
            <TextField
              className={classes.addressinput}
              variant="filled"
              label="Street Address"
              name="address"
              onChange={(e) => handleChange(e)}
            />
            <div className={classes.addressChild}>
              <TextField
                className={classes.address2input}
                variant="filled"
                label="City"
                name="city"
                value={formData.city}
                onChange={(e) => handleChange(e)}
              />
              <FormControl className={classes.stateSelect}>
                <InputLabel id="select-label" style={{ paddingLeft: "1vw" }}>
                  State
                </InputLabel>
                <Select
                  labelId="select-label"
                  variant="filled"
                  label="State"
                  name="state"
                  defaultValue=""
                  SelectDisplayProps={{ style: {} }}
                  onChange={(e) => handleChange(e)}
                >
                  {states.map((state) => (
                    <MenuItem
                      key={state.abbreviation}
                      value={state.abbreviation}
                    >
                      {state.abbreviation}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                className={classes.zipInput}
                variant="filled"
                label="Zip Code"
                name="zip_code"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        ) : null}
      </form>
      <div className={classes.checkboxes}>
        <FormControlLabel
          label={
            <div className={classes.checkboxLabels}>
              Include Address? All viewers who provide a mailing address will be
              entered to win one of fifty restaurant gifts cards.
            </div>
          }
          control={
            <Checkbox
              checked={addressToggle}
              onChange={() => setAddressToggle((prev) => !prev)}
            />
          }
        />
        <FormControlLabel
          label={
            <div className={classes.checkboxLabels}>
              Yes, I would like to receive communications from the Office of
              Development at Boston Medical Center.
            </div>
          }
          control={
            <Checkbox
              checked={comm_opt}
              onChange={() => setCommOpt((prev) => !prev)}
            />
          }
        />
      </div>
      <Button
        className={classes.button}
        variant="outlined"
        onClick={handleSubmit}
      >
        Enter!
      </Button>
    </>
  );
}

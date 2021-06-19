import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import theme from "./styles/muiTheme";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import Welcome from "./screens/Welcome/Welcome";
import { createGuest, setLoggedIn } from "./services/guests";
import backgroundimg from "./assets/background.png";
import AdminContainer from "./containers/AdminContainer/AdminContainer";
import Event from "./screens/Event/Event";

const useStyles = makeStyles((theme) => ({
  app: {
    background: "rgb(226,135,200)",
    backgroundImage: `url(${backgroundimg})`,
    backgroundPosition: "center",
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    color: "white",
    width: "100vw",
    height: "100vh",
    minHeight: "100vh",
    position: "fixed",
  },
  container: {
    overflowY: "scroll",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
  },
}));

function App() {
  const [currentGuest, setCurrentGuest] = useState(null);
  const classes = useStyles();
  const history = useHistory();

  const loginGuest = async (formData) => {
    // const now = new Date();
    // const then = new Date("June 17 2021");

    // if (now < then) {
    //   window.alert("This event starts on June 17th. Please try again then.");
    //   return;
    // }

    try {
      const response = await createGuest(formData);
      setLoggedIn(response);
      setCurrentGuest(response);
      history.push("/event");
    } catch (error) {
      console.log(error);
    }
  };

  // const verifyGuest = () => {
  //   if (checkLoggedIn()) {
  //     setCurrentGuest(JSON.parse(localStorage.getItem("guest-token")));
  //     history.push("/event");
  //   } else {
  //     history.push("/");
  //   }
  // };

  // useEffect(() => {
  //   verifyGuest();
  // }, []);

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/panel">
              <AdminContainer />
            </Route>
            <Route path="/event">
              <Event currentGuest={currentGuest} />
            </Route>
            <Route exact path="/">
              <Welcome
                setCurrentGuest={setCurrentGuest}
                loginGuest={loginGuest}
              />
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;

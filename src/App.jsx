import React from "react";
import { Provider } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import store from "./store/Store";
import Main from "./views/Main.jsx";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function App(props) {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <CssBaseline>
        <header>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                George's Web Admin
              </Typography>
              <Button color="inherit">Posts</Button>
            </Toolbar>
          </AppBar>
        </header>
        <main>
          <Main />
        </main>
      </CssBaseline>
    </Provider>
  );
}

export default App;

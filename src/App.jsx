import React from "react";
import { Provider } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import TestView from "./components/TestView.jsx";

import store from "./store/Store";

function App(props) {
  return (
    <Provider store={store}>
      <CssBaseline>
        <h1>Hello</h1>
        <TestView />
      </CssBaseline>
    </Provider>
  );
}

export default App;

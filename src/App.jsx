import React from "react";
import { Provider } from "react-redux";

import store from "./store/Store";
import Main from "./views/Main.jsx";

function App(props) {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;

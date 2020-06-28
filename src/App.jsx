import React from "react";
import { Provider } from "react-redux";

import store from "./store/Store";
import Main from "./views/Main.jsx";

function App(props) {
  return (
    <Provider store={store}>
      <header>
        <h1>Web Admin</h1>
      </header>
      <main>
        <Main />
      </main>
    </Provider>
  );
}

export default App;

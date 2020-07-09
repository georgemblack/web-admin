import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Link, Redirect, useHistory } from "react-router-dom";

import { getUserIsAuthenticated } from "./store/Selectors";
import HomePage from "./views/HomePage.jsx";
import LoginPage from "./views/LoginPage.jsx";
import ViewTable from "./components/ViewTable.jsx";
import NewPostPage from "./views/NewPostPage.jsx";

function App(props) {
  const userIsAuthenticated = useSelector(getUserIsAuthenticated);
  let history = useHistory();

  useEffect(() => {
    if (userIsAuthenticated) {
      history.push("/");
    }
  }, [userIsAuthenticated]);

  return (
    <>
      <header>
        <h1>Web Admin</h1>
        {userIsAuthenticated && (
          <nav>
            <Link to="/">Home</Link>
            <Link to="/views">Views</Link>
            <Link to="/new-post">New Post</Link>
          </nav>
        )}
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            {userIsAuthenticated ? <HomePage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/views">
            <ViewTable />
          </Route>
          <Route path="/new-post">
            <NewPostPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

import { useEffect } from "react";
import { Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import decode from "jwt-decode";

import GlobalContext from "./context/GlobalContext";
import useGlobalContext from "./context/GlobalContextHook";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import NewPostPage from "./views/NewPostPage";
import EditPostPage from "./views/EditPostPage";

function App(props) {
  const context = useGlobalContext();
  let history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const decoded = decode(token);
    if (decoded.exp > Date.now() / 1000) {
      context.authenticateUser(token);
    } else {
      window.localStorage.clear();
    }
  }, []);

  useEffect(() => {
    if (context.userIsAuthenticated) {
      history.push("/");
    }
  }, [context.userIsAuthenticated]);

  return (
    <GlobalContext.Provider value={context}>
      {context.userIsAuthenticated && (
        <header>
          <nav className="space-x-3 text-xl">
            <Link to="/">Home</Link>
            <Link to="/posts/new">New Post</Link>
          </nav>
        </header>
      )}
      <main>
        <Switch>
          <Route exact path="/">
            {context.userIsAuthenticated ? (
              <HomePage />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/posts/new">
            <NewPostPage />
          </Route>
          <Route path="/posts/:id/edit">
            <EditPostPage />
          </Route>
        </Switch>
      </main>
    </GlobalContext.Provider>
  );
}

export default App;
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import decode from "jwt-decode";

import { getUserIsAuthenticated } from "./store/Selectors";
import HomePage from "./views/HomePage.jsx";
import LoginPage from "./views/LoginPage.jsx";
import ViewTable from "./components/ViewTable.jsx";
import NewPostPage from "./views/NewPostPage.jsx";
import EditPostPage from "./views/EditPostPage.jsx";
import BinPage from "./views/BinPage.jsx";
import { setAuthToken } from "./store/actions/Auth";

function App(props) {
  const userIsAuthenticated = useSelector(getUserIsAuthenticated);
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const decoded = decode(token);
    if (decoded.exp > Date.now() / 1000) {
      dispatch(setAuthToken(token));
    } else {
      window.localStorage.clear();
    }
  }, []);

  useEffect(() => {
    if (userIsAuthenticated) {
      history.push("/");
    }
  }, [userIsAuthenticated]);

  return (
    <>
      {userIsAuthenticated && (
        <header>
          <h1>Web Admin</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/views">Views</Link>
            <Link to="/bin">Bin</Link>
            <Link to="/posts/new">New Post</Link>
          </nav>
        </header>
      )}
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
          <Route path="/bin">
            <BinPage />
          </Route>
          <Route path="/posts/new">
            <NewPostPage />
          </Route>
          <Route path="/posts/:id/edit">
            <EditPostPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

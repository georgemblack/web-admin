import decode from "jwt-decode";
import { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import GlobalContext from "./context/GlobalContext";
import useGlobalContext from "./context/GlobalContextHook";
import EditPostPage from "./views/EditPostPage";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import NewPostPage from "./views/NewPostPage";

interface Token {
  exp: number;
}

function App() {
  const context = useGlobalContext();
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const decoded = decode<Token>(token);
    if (decoded.exp > Date.now() / 1000) {
      context.authenticateUser(token);
    } else {
      window.localStorage.clear();
    }
  }, []);

  useEffect(() => {
    if (context.userIsAuthenticated) navigate("/");
    else navigate("/login");
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts/new" element={<NewPostPage />} />
          <Route path="/posts/:id/edit" element={<EditPostPage />} />
        </Routes>
      </main>
    </GlobalContext.Provider>
  );
}

export default App;

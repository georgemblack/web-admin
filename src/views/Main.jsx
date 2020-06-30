import React, { useState } from "react";
import { useSelector } from "react-redux";

import { getUserIsAuthenticated } from "../store/Selectors";
import LikeForm from "../components/LikeForm.jsx";
import PostTable from "../components/PostTable.jsx";
import LoginForm from "../components/LoginForm.jsx";
import LikeTable from "../components/LikeTable.jsx";
import ViewTable from "../components/ViewTable.jsx";

const pages = {
  HOME: 0,
  VIEWS: 1,
  POSTS: 2,
};

function Main(props) {
  const [page, setPage] = useState(pages.HOME);
  const userIsAuthenticated = useSelector(getUserIsAuthenticated);

  const getPage = () => {
    if (!userIsAuthenticated) {
      return <LoginForm />;
    }
    if (page === pages.HOME) {
      return (
        <>
          <LikeForm />
          <LikeTable />
          <PostTable />
        </>
      );
    }
    if (page === pages.VIEWS) {
      return <ViewTable />;
    }
  };

  return (
    <>
      <header>
        <h1>Web Admin</h1>
        <nav>
          <p onClick={() => setPage(pages.HOME)}>Home</p>
          <p onClick={() => setPage(pages.VIEWS)}>Views</p>
        </nav>
      </header>
      <main>{getPage()}</main>
    </>
  );
}

export default Main;

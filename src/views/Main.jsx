import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUserIsAuthenticated } from "../store/Selectors";
import LikeForm from "../components/LikeForm.jsx";
import PostsTable from "../components/PostsTable.jsx";
import LoginPage from "./LoginPage.jsx";

function Main(props) {
  const userIsAuthenticated = useSelector(getUserIsAuthenticated);

  let page;
  if (userIsAuthenticated)
    page = (
      <div>
        <LikeForm />
        <PostsTable />
      </div>
    );
  else page = <LoginPage />;

  return <div>{page}</div>;
}

export default Main;

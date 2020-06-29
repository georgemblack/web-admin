import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUserIsAuthenticated } from "../store/Selectors";
import LikeForm from "../components/LikeForm.jsx";
import PostTable from "../components/PostTable.jsx";
import LoginForm from "../components/LoginForm.jsx";
import LikesTable from "../components/LikesTable.jsx";

function Main(props) {
  const userIsAuthenticated = useSelector(getUserIsAuthenticated);

  let page;
  if (userIsAuthenticated)
    page = (
      <div>
        <LikeForm />
        <PostsTable />
        <LikesTable />
      </div>
    );
  else page = <LoginForm />;

  return <div>{page}</div>;
}

export default Main;

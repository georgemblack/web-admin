import React from "react";

import LikeForm from "../components/LikeForm.jsx";
import LikeTable from "../components/LikeTable.jsx";
import PostTable from "../components/PostTable.jsx";

function HomePage(props) {
  return (
    <>
      <LikeForm />
      <LikeTable />
      <PostTable />
    </>
  );
}

export default HomePage;

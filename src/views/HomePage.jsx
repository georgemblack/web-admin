import React from "react";

import LikeForm from "../components/LikeForm.jsx";
import LikeTable from "../components/LikeTable.jsx";
import PostTable from "../components/PostTable.jsx";
import BuildButton from "../components/BuildButton.jsx";

function HomePage(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <LikeForm />
        <BuildButton />
      </div>
      <LikeTable />
      <PostTable />
    </>
  );
}

export default HomePage;

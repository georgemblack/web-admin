import React from "react";

import BuildButton from "./BuildButton.jsx";

function BuildForm(props) {
  return (
    <div className="build-form">
      <h2>Build</h2>
      <form>
        <BuildButton />
      </form>
    </div>
  );
}

export default BuildForm;

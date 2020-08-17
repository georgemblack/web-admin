import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postBuild } from "../store/actions/Build";

function BuildButton(props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const message = loading ? "Building..." : "Start Build";

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    await dispatch(postBuild());
    setLoading(false);
  };

  return (
    <div>
      <button className="button-build" onClick={handleClick}>
        {message}
      </button>
    </div>
  );
}

export default BuildButton;

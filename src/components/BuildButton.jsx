import { useState } from "react";

import { postBuildAPI } from "../data/Api";
import Button from "./Button.jsx";

function BuildButton(props) {
  const [buildID, setBuildID] = useState("");
  const [loading, setLoading] = useState(false);

  const message = loading ? "Building..." : "Start Build";

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await postBuildAPI();
    setBuildID(response.buildID);
    setLoading(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>{message}</Button>
      {buildID && <p>{buildID}</p>}
    </div>
  );
}

export default BuildButton;

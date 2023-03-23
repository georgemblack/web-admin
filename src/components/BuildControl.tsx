import { useState } from "react";

import { postBuildAPI } from "../data/Api";
import Button from "./Button";

function BuildButton(props) {
  const [message, setMessage] = useState("Start Build");

  const handleClick = async (event) => {
    event.preventDefault();
    setMessage("Building ⚙️");
    const response = await postBuildAPI();
    if (response.buildID) setMessage("Build Succeeded ✅");
    else setMessage("Build Failed ❌");
  };

  return (
    <div className="inline-block">
      <Button onClick={handleClick}>{message}</Button>
    </div>
  );
}

export default BuildButton;

import { useState } from "react";

import { postBuildAPI } from "../data/Api";

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
      <button onClick={handleClick}>
        {message}
      </button>
      {buildID && <p>{buildID}</p>}
    </div>
  );
}

export default BuildButton;

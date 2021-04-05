import { useState } from "react";

import { postBuild } from "../data/Api";

function BuildButton(props) {
  const [buildID, setBuildID] = useState("");
  const [loading, setLoading] = useState(false);

  const message = loading ? "Building..." : "Start Build";

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await postBuild();
    setBuildID(response.build.buildID);
    setLoading(false);
  };

  return (
    <div>
      <button className="button-orange" onClick={handleClick}>
        {message}
      </button>
      {buildID && <p>{buildID}</p>}
    </div>
  );
}

export default BuildButton;

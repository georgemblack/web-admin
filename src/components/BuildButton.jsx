import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postBuild } from "../store/actions/Build";
import { getBuildIDSelector } from "../store/Selectors";

function BuildButton(props) {
  const dispatch = useDispatch();
  const latestBuildID = useSelector(getBuildIDSelector);

  const [loading, setLoading] = useState(false);
  const message = loading ? "Building..." : "Start Build";

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    await dispatch(postBuild());
    setLoading(false);
  };

  return (
    <div>
      <button className="button-orange" onClick={handleClick}>
        {message}
      </button>
      {latestBuildID && <p>{latestBuildID}</p>}
    </div>
  );
}

export default BuildButton;

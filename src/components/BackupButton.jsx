import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postBackup } from "../store/actions/Backup";
import { getBackupPrefixSelector } from "../store/Selectors";

function BackupButton(props) {
  const dispatch = useDispatch();
  const latestBackupID = useSelector(getBackupPrefixSelector);

  const [loading, setLoading] = useState(false);
  const message = loading ? "Creating backup..." : "Start Backup";

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    await dispatch(postBackup());
    setLoading(false);
  };

  return (
    <div>
      <button className="button-blue" onClick={handleClick}>
        {message}
      </button>
      {latestBackupID && <p>{latestBackupID}</p>}
    </div>
  );
}

export default BackupButton;

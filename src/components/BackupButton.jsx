import { useState } from "react";

import { postBackupAPI } from "../data/Api";

function BackupButton(props) {
  const [backupID, setBackupID] = useState("");
  const [loading, setLoading] = useState(false);

  const message = loading ? "Creating backup..." : "Start Backup";

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await postBackupAPI();
    setBackupID(response.backupPrefix);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {message}
      </button>
      {backupID && <p>{backupID}</p>}
    </div>
  );
}

export default BackupButton;

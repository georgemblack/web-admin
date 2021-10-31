import { useState } from "react";

import { postBackupAPI } from "../data/Api";
import Button from "./Button.jsx";

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
      <Button onClick={handleClick}>{message}</Button>
      {backupID && <p>{backupID}</p>}
    </div>
  );
}

export default BackupButton;

import { useState } from "react";

import { postBackupAPI } from "../data/Api";
import Button from "./Button.jsx";

function BackupButton(props) {
  const [message, setMessage] = useState("Start Backup");

  const handleClick = async (event) => {
    event.preventDefault();
    setMessage("Backing up ⚙️");
    const response = await postBackupAPI();
    if (response.backupPrefix) setMessage("Backup Succeeded ✅");
    else setMessage("Backup Failed ❌");
  };

  return (
    <div className="inline-block">
      <Button onClick={handleClick}>{message}</Button>
    </div>
  );
}

export default BackupButton;

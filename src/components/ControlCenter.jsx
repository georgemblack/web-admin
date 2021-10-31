import BackupButton from "./BackupButton.jsx";
import BuildButton from "./BuildButton.jsx";

function ControlCenter(props) {
  return (
    <div>
      <BuildButton />
      <BackupButton />
    </div>
  );
}

export default ControlCenter;

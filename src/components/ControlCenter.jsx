import BackupControl from "./BackupControl.jsx";
import BuildControl from "./BuildControl.jsx";

function ControlCenter(props) {
  return (
    <div>
      <BuildControl />
      <BackupControl />
    </div>
  );
}

export default ControlCenter;

import BackupControl from "./BackupControl.jsx";
import BuildControl from "./BuildControl.jsx";

function ControlCenter(props) {
  return (
    <div className="flex mt-4 space-x-1">
      <BuildControl />
      <BackupControl />
    </div>
  );
}

export default ControlCenter;

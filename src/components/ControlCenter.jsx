import BackupControl from "./BackupControl.jsx";
import BuildControl from "./BuildControl.jsx";

function ControlCenter(props) {
  return (
    <div className="mt-4">
      <h2 className="text-2xl">Control Center</h2>
      <div className="flex gap-2 mt-2">
        <BuildControl />
        <BackupControl />
      </div>
    </div>
  );
}

export default ControlCenter;

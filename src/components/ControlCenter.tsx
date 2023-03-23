import BuildControl from "./BuildControl";

function ControlCenter(props) {
  return (
    <div className="mt-4">
      <h2 className="text-2xl">Control Center</h2>
      <div className="mt-2 flex gap-2">
        <BuildControl />
      </div>
    </div>
  );
}

export default ControlCenter;

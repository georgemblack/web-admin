import BackupButton from "./BackupButton.jsx";

function BackupForm(props) {
  return (
    <div className="backup-form">
      <h2>Backup</h2>
      <form>
        <BackupButton />
      </form>
    </div>
  );
}

export default BackupForm;

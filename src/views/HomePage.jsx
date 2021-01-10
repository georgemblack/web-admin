import LikeForm from "../components/LikeForm.jsx";
import LikeTable from "../components/LikeTable.jsx";
import PostTable from "../components/PostTable.jsx";
import BuildForm from "../components/BuildForm.jsx";
import BackupForm from "../components/BackupForm.jsx";

function HomePage(props) {
  return (
    <>
      <BuildForm />
      <BackupForm />
      <LikeForm />
      <LikeTable />
      <PostTable />
    </>
  );
}

export default HomePage;

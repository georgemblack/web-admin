import LikeForm from "../components/LikeForm.jsx";
import LikeTable from "../components/LikeTable.jsx";
import PostTable from "../components/PostTable.jsx";
import ControlCenter from "../components/ControlCenter.jsx";

function HomePage(props) {
  return (
    <>
      <ControlCenter />
      <LikeForm />
      <PostTable />
      <LikeTable />
    </>
  );
}

export default HomePage;

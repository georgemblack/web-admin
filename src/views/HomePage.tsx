import LikeForm from "../components/LikeForm";
import LikeTable from "../components/LikeTable";
import PostTable from "../components/PostTable";
import ControlCenter from "../components/ControlCenter";

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

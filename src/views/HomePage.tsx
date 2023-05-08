import ControlCenter from "../components/ControlCenter";
import LikeForm from "../components/LikeForm";
import LikeTable from "../components/LikeTable";
import PostTable from "../components/PostTable";

function HomePage() {
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

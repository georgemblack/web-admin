import LikeForm from "../components/LikeForm";
import LikeTable from "../components/LikeTable";
import PostTable from "../components/PostTable";

function HomePage() {
  return (
    <>
      <LikeForm />
      <PostTable />
      <LikeTable />
    </>
  );
}

export default HomePage;

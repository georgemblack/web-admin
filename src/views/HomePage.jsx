import LikeForm from "../components/LikeForm.jsx";
import LikeTable from "../components/LikeTable.jsx";
import PostTable from "../components/PostTable.jsx";
import BuildForm from "../components/BuildForm.jsx";

function HomePage(props) {
  return (
    <>
      <BuildForm />
      <LikeForm />
      <LikeTable />
      <PostTable />
    </>
  );
}

export default HomePage;

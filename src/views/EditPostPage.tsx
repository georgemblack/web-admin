import { useContext } from "react";
import { useParams } from "react-router-dom";

import PostEditor from "../components/PostEditor";
import GlobalContext from "../context/GlobalContext";

function EditPostPage(props) {
  const { posts } = useContext(GlobalContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);

  return <PostEditor post={post} />;
}

export default EditPostPage;

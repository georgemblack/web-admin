import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPostsSelector } from "../store/Selectors";
import PostEditor from "../components/PostEditor.jsx";

function EditPostPage(props) {
  const { id } = useParams();
  const posts = useSelector(getPostsSelector);
  const post = posts.find((post) => post.id === id);

  return <PostEditor post={post} />;
}

export default EditPostPage;

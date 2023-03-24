import { useContext } from "react";
import { useParams } from "react-router-dom";

import PostEditor from "../components/PostEditor";
import GlobalContext from "../context/GlobalContext";
import IGlobalContext from "../context/IGlobalContext";

interface Params {
  id: string;
}

function EditPostPage() {
  const { posts } = useContext(GlobalContext) as IGlobalContext;
  const { id } = useParams<Params>();
  const post = posts.find((post) => post.id === id);

  return <PostEditor post={post} />;
}

export default EditPostPage;

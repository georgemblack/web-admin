import { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import IGlobalContext from "../context/IGlobalContext";

import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton";
import EditPostButton from "./EditPostButton";
import Time from "./Time";

function PostTable() {
  const { posts, deletePost, getPosts } = useContext(
    GlobalContext
  ) as IGlobalContext;

  const draftTag = (
    <span className="ml-1 rounded-full bg-green-600 px-2 py-px text-xs">
      Draft
    </span>
  );

  const handleDelete = (post) => {
    deletePost(post.id);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-2xl">Posts</h2>
      <div>
        {posts.map((post) => (
          <div className="mt-2 flex flex-col justify-between rounded bg-gray-800 px-3 py-2 lg:flex-row">
            <p className="text-white">
              {post.metadata.title} {post.metadata.draft ? draftTag : ""}
            </p>
            <div className="mt-1 flex items-end justify-between lg:m-0">
              <div className="inline-block text-white opacity-25 lg:mr-4 lg:opacity-100">
                <Time timestamp={post.published._seconds} />
              </div>
              <div className="inline-block">
                <EditPostButton id={post.id} />
                <DeleteWithConfirmationButton
                  handleDelete={() => handleDelete(post)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostTable;

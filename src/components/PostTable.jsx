import { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext.js";

import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton.jsx";
import EditPostButton from "./EditPostButton.jsx";
import Time from "./Time.jsx";

function PostTable() {
  const { posts, deletePost, getPosts } = useContext(GlobalContext);

  const draftTag = (
    <span className="text-xs bg-yellow-500 px-1 py-px ml-1 rounded">Draft</span>
  );

  const handleDelete = (post) => {
    deletePost(post.id);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <div>
        {posts.map((post) => (
          <div className="mt-2 px-3 py-2 flex flex-col lg:flex-row justify-between bg-gray-700 rounded">
            <p className="text-white">
              {post.metadata.title} {post.metadata.draft ? draftTag : ""}
            </p>
            <div className="flex justify-between">
              <div className="inline-block lg:mr-4 text-white opacity-25 lg:opacity-100">
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
    </>
  );
}

export default PostTable;

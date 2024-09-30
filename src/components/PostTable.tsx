import { useContext, useEffect } from "react";

import GlobalContext from "../context/GlobalContext";
import IGlobalContext from "../context/IGlobalContext";
import { Post } from "../data/Types";
import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton";
import EditPostButton from "./EditPostButton";
import Time from "./Time";

function PostTable() {
  const { posts, deletePost, getPosts } = useContext(
    GlobalContext
  ) as IGlobalContext;

  const draftTag = (
    <span className="px-2 py-px ml-1 text-xs bg-green-600 rounded-full">
      Draft
    </span>
  );

  const handleDelete = (post: Post) => {
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
          <div
            key={post.id}
            className="flex flex-col justify-between px-3 py-2 mt-2 bg-gray-800 rounded lg:flex-row"
          >
            <p className="text-white">
              {post.title} {post.draft ? draftTag : ""}
            </p>
            <div className="flex items-end justify-between mt-1 lg:m-0">
              <div className="inline-block text-white opacity-25 lg:mr-4 lg:opacity-100">
                <Time timestamp={post.published} />
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

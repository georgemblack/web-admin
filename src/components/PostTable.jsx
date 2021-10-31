import { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext.js";

import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton.jsx";
import EditPostButton from "./EditPostButton.jsx";
import Time from "./Time.jsx";

function PostTable(props) {
  const { posts, deletePost, getPosts } = useContext(GlobalContext);

  const draftTag = <span>Draft</span>;

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
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Published</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.metadata.title}</td>
                <td>
                  <Time timestamp={post.published._seconds} />
                </td>
                <td>{post.metadata.draft ? draftTag : ""}</td>
                <td>
                  <EditPostButton id={post.id} />
                  <DeleteWithConfirmationButton
                    handleDelete={() => handleDelete(post)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PostTable;

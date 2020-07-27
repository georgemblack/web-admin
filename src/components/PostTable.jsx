import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPostsSelector } from "../store/Selectors";
import { getPosts, deletePost } from "../store/actions/Posts";
import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton.jsx";
import EditPostButton from "./EditPostButton.jsx";
import Time from "./Time.jsx";

function PostTable(props) {
  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelector);

  const handleDelete = (post) => {
    dispatch(deletePost(post.id));
  };

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Published</th>
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
              <td style={{ width: "3em" }}>
                <EditPostButton id={post.id} />
                <DeleteWithConfirmationButton
                  handleDelete={() => handleDelete(post)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PostTable;

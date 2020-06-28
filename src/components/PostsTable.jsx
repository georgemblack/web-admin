import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/Selectors";
import { fetchPosts } from "../store/Actions";

function PostsTable(props) {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.metadata.title}</td>
              <td>{post.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PostsTable;

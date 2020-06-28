import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLike } from "../store/actions/Likes";

function PostsTable(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    dispatch(postLike({ title, url }));
    event.preventDefault();
  };

  return (
    <>
      <h2>Add Like</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </>
  );
}

export default PostsTable;

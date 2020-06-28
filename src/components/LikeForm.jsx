import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLike } from "../store/actions/Likes";

function PostsTable(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSumbit = () => {
    dispatch(postLike({ title, url }));
  };

  return (
    <>
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
      <button onClick={handleSumbit}>Post</button>
    </>
  );
}

export default PostsTable;

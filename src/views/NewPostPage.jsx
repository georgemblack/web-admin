import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postPost } from "../store/actions/Posts";

function NewPostPage(props) {
  const [title, setTitle] = useState("New Post");
  const [content, setContent] = useState("Start writing!");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(
      postPost({
        metadata: {
          title,
        },
        content,
        published: new Date(),
      })
    );
    setTitle("");
    setContent("");
  };

  return (
    <>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <textarea
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <p>{title}</p>
      <p>{content}</p>
    </>
  );
}

export default NewPostPage;

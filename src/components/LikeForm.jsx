import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLike } from "../store/actions/Likes";

function LikeForm(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const clearInputs = () => {
    setTitle("");
    setUrl("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(postLike({ title, url }));
    clearInputs();
  };

  return (
    <div>
      <h2>Add Like</h2>
      <form className="inline-form" onSubmit={handleSubmit}>
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
    </div>
  );
}

export default LikeForm;

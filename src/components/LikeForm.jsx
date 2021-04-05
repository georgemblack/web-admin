import { useState, useContext } from "react";

import GlobalContext from "../context/GlobalContext";

function LikeForm(props) {
  const { postLike } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const clearInputs = () => {
    setTitle("");
    setUrl("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postLike({ title, url });
    clearInputs();
  };

  return (
    <div className="add-like">
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
    </div>
  );
}

export default LikeForm;

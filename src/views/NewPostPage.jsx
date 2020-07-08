import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postPost } from "../store/actions/Posts";

function NewPostPage(props) {
  const [draft, setDraft] = useState(true);
  const [published, setPublished] = useState(new Date());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(
      postPost({
        metadata: {
          title,
          draft,
        },
        content,
        published,
      })
    );
    setTitle("");
    setContent("");
  };

  return (
    <div className="post-editor">
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="checkbox"
            name="draft"
            onChange={() => setDraft(!draft)}
            defaultChecked={draft}
          />
          <label htmlFor="draft">Draft?</label>
        </div>
        <div>
          <button
            type="button"
            name="date"
            onClick={() => setPublished(new Date())}
          >
            Now
          </button>
          <label htmlFor="date">{published.toLocaleString()}</label>
        </div>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <textarea
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewPostPage;

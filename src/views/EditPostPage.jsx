import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";

import { getPostsSelector } from "../store/Selectors";
import { putPost } from "../store/actions/Posts";

function EditPostPage(props) {
  const { id } = useParams();
  const posts = useSelector(getPostsSelector);
  const post = posts.find((post) => post.id === id);

  const [draft, setDraft] = useState(post.metadata.draft || true);
  const [published, setPublished] = useState(
    moment.unix(post.published._seconds).toDate()
  );
  const [title, setTitle] = useState(post.metadata.title);
  const [content, setContent] = useState(post.content);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(
      putPost(id, {
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

export default EditPostPage;

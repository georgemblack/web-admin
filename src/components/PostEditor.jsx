import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import merge from "lodash.merge";

import { postPost, putPost } from "../store/actions/Posts";

function reducer(state, data) {
  return merge({}, state, data);
}

function PostEditor(props) {
  const post = props.post;

  let initialState = {
    metadata: {
      title: "",
      draft: true,
    },
    content: "",
    published: new Date(),
  };

  if (post) {
    initialState = {
      metadata: post.metadata,
      content: post.content,
      published: moment.unix(post.published._seconds).toDate(),
    };
  }

  const dispatch = useDispatch();
  const history = useHistory();
  const [formState, formDispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (post) {
      await dispatch(putPost(post.id, formState));
    } else {
      await dispatch(postPost(formState));
    }
    history.push("/");
  };

  return (
    <div className="post-editor">
      <h2>{post ? "Edit Post" : "Create Post"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <button
            type="button"
            name="draft"
            onClick={() =>
              formDispatch({ metadata: { draft: !formState.metadata.draft } })
            }
          >
            {formState.metadata.draft ? "Draft" : "Not a Draft"}
          </button>
          <button
            type="button"
            name="date"
            onClick={() => formDispatch({ published: new Date() })}
          >
            Now
          </button>
          <label htmlFor="date">{formState.published.toLocaleString()}</label>
        </div>
        <input
          type="text"
          value={formState.metadata.title}
          placeholder="Title"
          onChange={(event) =>
            formDispatch({ metadata: { title: event.target.value } })
          }
        ></input>
        <textarea
          type="text"
          value={formState.content}
          onChange={(event) => formDispatch({ content: event.target.value })}
        ></textarea>
        <div>
          <button type="submit">{post ? "Update Post" : "Submit Post"}</button>
        </div>
      </form>
    </div>
  );
}

export default PostEditor;

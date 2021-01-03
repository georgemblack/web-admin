import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fromUnixTime } from "date-fns";
import merge from "lodash.merge";

import TextListInput from "./TextListInput.jsx";
import { postPost, putPost } from "../store/actions/Posts";
import { slugify } from "../utils";

function reducer(state, data) {
  return merge({}, state, data);
}

function PostEditor(props) {
  const post = props.post;

  let initialState = {
    metadata: {
      title: "",
      slug: "",
      draft: true,
      tags: [],
    },
    content: "",
    published: new Date(),
  };

  if (post) {
    initialState = {
      metadata: post.metadata,
      content: post.content,
      published: fromUnixTime(post.published._seconds),
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
        <div className="meta-controls">
          <button
            type="button"
            name="draft"
            onClick={() =>
              formDispatch({ metadata: { draft: !formState.metadata.draft } })
            }
          >
            {formState.metadata.draft ? "Draft" : "Published"}
          </button>
          <button
            type="button"
            name="date"
            onClick={() => formDispatch({ published: new Date() })}
          >
            ⏱
          </button>
          <label htmlFor="date">{formState.published.toLocaleString()}</label>
        </div>
        <div className="title-controls">
          <input
            type="text"
            value={formState.metadata.title}
            placeholder="Title"
            onChange={(event) =>
              formDispatch({ metadata: { title: event.target.value } })
            }
          ></input>
        </div>
        <div className="slug-controls">
          <div className="slug">
            <input
              type="text"
              value={formState.metadata.slug}
              placeholder="Slug"
              onChange={(event) =>
                formDispatch({ metadata: { slug: event.target.value } })
              }
            ></input>
          </div>
          <button
            type="button"
            name="slug-suggest"
            onClick={() =>
              formDispatch({
                metadata: { slug: slugify(formState.metadata.title) },
              })
            }
          >
            🐌
          </button>
        </div>
        <div className="tag-controls">
          <TextListInput
            type="text"
            value={formState.metadata.tags}
            placeholder="Tags"
            onChange={(tags) => formDispatch({ metadata: { tags } })}
          ></TextListInput>
        </div>
        <div className="content">
          <textarea
            type="text"
            value={formState.content}
            onChange={(event) => formDispatch({ content: event.target.value })}
          ></textarea>
        </div>
        <div className="actions">
          <div>
            <button type="submit">
              {post ? "Update Post" : "Submit Post"}
            </button>
          </div>
        </div>
      </form>
      <pre>
        <code>
          {"<!--more-->\n"}
          {'{{- image webp="image" -}}\n'}
          {"“Hello? That’s it.”"}
        </code>
      </pre>
    </div>
  );
}

export default PostEditor;

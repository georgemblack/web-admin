import { useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { fromUnixTime } from "date-fns";
import mergeWith from "lodash.mergewith";
import has from "lodash.has";

import { slugify } from "../utils";
import GlobalContext from "../context/GlobalContext.js";
import TextListInput from "./TextListInput.jsx";
import LocationInput from "./LocationInput.jsx";

function mergeCustomizer(objValue, srcValue) {
  // Don't merge the values in two arrays.
  // Instead, let the new one overwrite the old one.
  if (Array.isArray(objValue) && Array.isArray(srcValue)) {
    return srcValue;
  }
}

function reducer(state, data) {
  let merged = mergeWith({}, state, data, mergeCustomizer);

  // Delete location if empty
  if (has(merged, "metadata.location")) {
    if (merged.metadata.location.every((item) => item === "")) {
      delete merged.metadata.location;
    }
  }

  // Delete tags if empty
  if (has(merged, "metadata.tags")) {
    if (merged.metadata.tags.length === 0) {
      delete merged.metadata.tags;
    }
  }

  return merged;
}

function PostEditor(props) {
  const { putPost, postPost } = useContext(GlobalContext);
  const post = props.post;

  let initialState = {
    metadata: {
      title: "",
      slug: "",
      draft: true,
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

  const history = useHistory();
  const [formState, formDispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (post) {
      await putPost(post.id, formState);
    } else {
      await postPost(formState);
    }
    history.push("/");
  };

  return (
    <div>
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
        <div>
          <input
            type="text"
            value={formState.metadata.title}
            placeholder="Title"
            onChange={(event) =>
              formDispatch({ metadata: { title: event.target.value } })
            }
          ></input>
        </div>
        <div>
          <div>
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
        <div>
          <TextListInput
            value={formState.metadata.tags}
            placeholder="Tags"
            onChange={(tags) => formDispatch({ metadata: { tags } })}
          ></TextListInput>
        </div>
        <div>
          <LocationInput
            value={formState.metadata.location}
            onChange={(location) => formDispatch({ metadata: { location } })}
          ></LocationInput>
        </div>
        <div>
          <textarea
            type="text"
            value={formState.content}
            onChange={(event) => formDispatch({ content: event.target.value })}
          ></textarea>
        </div>
        <div>
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

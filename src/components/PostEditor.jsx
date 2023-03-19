import { useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { fromUnixTime } from "date-fns";
import mergeWith from "lodash.mergewith";
import has from "lodash.has";

import { slugify } from "../utils";
import GlobalContext from "../context/GlobalContext.js";
import TextListInput from "./TextListInput.jsx";
import LocationInput from "./LocationInput.jsx";
import EmojiButton from "./EmojiButton.jsx";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import TextArea from "./TextArea.jsx";

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
      <h2 className="mt-4 text-2xl">{post ? "Edit Post" : "Create Post"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-2 max-w-lg">
          <div className="flex items-center gap-2">
            <Button
              type="button"
              name="draft"
              onClick={() =>
                formDispatch({ metadata: { draft: !formState.metadata.draft } })
              }
            >
              {formState.metadata.draft ? "Draft" : "Published"}
            </Button>
            <EmojiButton
              type="button"
              name="date"
              onClick={() => formDispatch({ published: new Date() })}
            >
              ⌚️
            </EmojiButton>
            <p className="inline-block">
              {formState.published.toLocaleString()}
            </p>
          </div>
          <div className="mt-4">
            <Input
              type="text"
              value={formState.metadata.title}
              placeholder="Title"
              onChange={(event) =>
                formDispatch({ metadata: { title: event.target.value } })
              }
            ></Input>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Input
              type="text"
              value={formState.metadata.slug}
              placeholder="Slug"
              onChange={(event) =>
                formDispatch({ metadata: { slug: event.target.value } })
              }
            ></Input>
            <EmojiButton
              type="button"
              name="slug-suggest"
              onClick={() =>
                formDispatch({
                  metadata: { slug: slugify(formState.metadata.title) },
                })
              }
            >
              🐌
            </EmojiButton>
          </div>
          <div className="mt-4">
            <LocationInput
              value={formState.metadata.location}
              onChange={(location) => formDispatch({ metadata: { location } })}
            ></LocationInput>
          </div>
          <div className="mt-2">
            <TextListInput
              value={formState.metadata.tags}
              placeholder="Tags"
              onChange={(tags) => formDispatch({ metadata: { tags } })}
            ></TextListInput>
          </div>
        </div>
        <div className="mt-4">
          <TextArea
            type="text"
            value={formState.content}
            onChange={(event) => formDispatch({ content: event.target.value })}
          ></TextArea>
        </div>
        <div className="mt-2">
          <Button type="submit">{post ? "Update Post" : "Submit Post"}</Button>
        </div>
      </form>
      <pre className="mt-4">
        <code>
          {"{% border /%}\n"}
          {'{% image urls=["/2023/something.jpg"] alt="Something" %}\n'}
          {"Some caption\n"}
          {"{% /image %}\n"}
          {"“Hello? That’s it.”"}
        </code>
      </pre>
    </div>
  );
}

export default PostEditor;

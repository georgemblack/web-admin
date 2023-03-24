import { useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { fromUnixTime } from "date-fns";

import { slugify } from "../utils";
import GlobalContext from "../context/GlobalContext";
import TextListInput from "./TextListInput";
import LocationInput from "./LocationInput";
import EmojiButton from "./EmojiButton";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import IGlobalContext from "../context/IGlobalContext";
import { Post } from "../data/Types";

interface FormAction {
  field: keyof FormState;
  value: string | boolean | string[] | Date;
}

interface FormState {
  title: string;
  slug: string;
  draft: boolean;
  content: string;
  published: Date;
  location?: string[];
  tags?: string[];
}

function reducer(state: FormState, action: FormAction): FormState {
  const merged = Object.assign({}, state);
  if (action.field === "title" && typeof action.value === "string") {
    merged.title = action.value;
  }
  if (action.field === "slug" && typeof action.value === "string") {
    merged.slug = action.value;
  }
  if (action.field === "draft" && typeof action.value === "boolean") {
    merged.draft = action.value;
  }
  if (action.field === "content" && typeof action.value === "string") {
    merged.content = action.value;
  }
  if (action.field === "published" && action.value instanceof Date) {
    merged.published = action.value;
  }
  if (action.field === "location" && Array.isArray(action.value)) {
    merged.location = action.value;
  }
  if (action.field === "tags" && Array.isArray(action.value)) {
    merged.tags = action.value;
  }
  return merged;
}

function PostEditor(props: { post?: Post }) {
  const { putPost, postPost } = useContext(GlobalContext) as IGlobalContext;
  const post = props.post;

  let initialState = {
    title: "",
    slug: "",
    draft: true,
    content: "",
    published: new Date(),
  };

  if (post) {
    initialState = {
      title: post.metadata.title,
      slug: post.metadata.slug,
      draft: post.metadata.draft,
      content: post.content,
      published: fromUnixTime(post.published._seconds),
    };
  }

  const history = useHistory();
  const [formState, formDispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Format form data to 'NewPost' type
    const newPost = {
      metadata: {
        title: formState.title,
        slug: formState.slug,
        draft: formState.draft,
      },
      content: formState.content,
      published: formState.published,
    };

    // Perform PUT or POST depending on whether post previously existed
    if (post) {
      await putPost(post.id, newPost);
    } else {
      await postPost(newPost);
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
                formDispatch({ field: "draft", value: !formState.draft })
              }
            >
              {formState.draft ? "Draft" : "Published"}
            </Button>
            <EmojiButton
              type="button"
              name="date"
              onClick={() =>
                formDispatch({ field: "published", value: new Date() })
              }
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
              value={formState.title}
              placeholder="Title"
              onChange={(event) =>
                formDispatch({ field: "title", value: event.target.value })
              }
            ></Input>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Input
              type="text"
              value={formState.slug}
              placeholder="Slug"
              onChange={(event) =>
                formDispatch({ field: "slug", value: event.target.value })
              }
            ></Input>
            <EmojiButton
              type="button"
              name="slug-suggest"
              onClick={() =>
                formDispatch({ field: "slug", value: slugify(formState.title) })
              }
            >
              🐌
            </EmojiButton>
          </div>
          <div className="mt-4">
            <LocationInput
              value={formState.location}
              onChange={(location) =>
                formDispatch({ field: "location", value: location })
              }
            ></LocationInput>
          </div>
          <div className="mt-2">
            <TextListInput
              value={formState.tags}
              placeholder="Tags"
              onChange={(tags) => formDispatch({ field: "tags", value: tags })}
            ></TextListInput>
          </div>
        </div>
        <div className="mt-4">
          <TextArea
            value={formState.content}
            onChange={(event) =>
              formDispatch({ field: "content", value: event.target.value })
            }
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

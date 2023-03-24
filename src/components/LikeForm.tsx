import { useState, useContext } from "react";

import IGlobalContext from "../context/IGlobalContext";
import GlobalContext from "../context/GlobalContext";
import Button from "./Button";
import Input from "./Input";

function LikeForm() {
  const { postLike } = useContext(GlobalContext) as IGlobalContext;
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const clearInputs = () => {
    setTitle("");
    setUrl("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await postLike({ title, url });
    clearInputs();
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl">Add Like</h2>
      <form
        className="mt-2 flex max-w-md flex-col gap-2 lg:max-w-lg lg:flex-row"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          type="text"
          placeholder="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <Button type="submit">Post</Button>
      </form>
    </div>
  );
}

export default LikeForm;

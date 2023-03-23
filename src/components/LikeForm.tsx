import { useState, useContext } from "react";

import GlobalContext from "../context/GlobalContext";
import Button from "./Button";
import Input from "./Input";

function LikeForm() {
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
    <div className="mt-4">
      <h2 className="text-2xl">Add Like</h2>
      <form
        className="mt-2 flex max-w-md flex-col gap-2 lg:max-w-lg lg:flex-row"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="title"
          class="appearance-none rounded-full border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          type="text"
          placeholder="url"
          className="mt-1 appearance-none rounded-full border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <Button onClick={handleSubmit}>Post</Button>
      </form>
    </div>
  );
}

export default LikeForm;

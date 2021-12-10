import { useState, useContext } from "react";

import GlobalContext from "../context/GlobalContext";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

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
    <div className="mt-4">
      <h2 className="text-2xl">Add Like</h2>
      <form
        className="flex flex-col max-w-md gap-2 mt-2 lg:flex-row lg:max-w-lg"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="title"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          type="text"
          placeholder="url"
          className="px-4 py-2 mt-1 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded-full appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <Button onClick={handleSubmit}>Post</Button>
      </form>
    </div>
  );
}

export default LikeForm;

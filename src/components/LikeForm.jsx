import { useState, useContext } from "react";

import GlobalContext from "../context/GlobalContext";
import Button from "./Button.jsx";

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
    <div className={"mt-4"}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="url"
          className={
            "mt-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          }
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <div className={"mt-1"}>
          <Button>Post</Button>
        </div>
      </form>
    </div>
  );
}

export default LikeForm;

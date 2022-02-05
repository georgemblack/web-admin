import { useState } from "react";

function DeleteWithConfirmationButton(props) {
  const [activated, setActivated] = useState(false);
  const message = activated ? "🔥" : "🗑";

  const handleClick = () => {
    if (activated) props.handleDelete();
    else setActivated(true);
  };

  return (
    <span
      onClick={handleClick}
      className="ml-1 inline-block cursor-pointer rounded-full bg-gray-600 p-2 text-sm lg:m-0 lg:bg-transparent lg:p-0 lg:text-base"
    >
      {message}
    </span>
  );
}

export default DeleteWithConfirmationButton;

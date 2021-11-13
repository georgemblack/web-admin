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
      className="inline-block p-2 ml-1 text-sm bg-gray-600 rounded-full cursor-pointer lg:p-0 lg:m-0 lg:text-base lg:bg-transparent"
    >
      {message}
    </span>
  );
}

export default DeleteWithConfirmationButton;

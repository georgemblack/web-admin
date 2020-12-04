import { useState } from "react";

function DeleteWithConfirmationButton(props) {
  const [activated, setActivated] = useState(false);
  const message = activated ? "🔥" : "🗑";

  const handleClick = () => {
    if (activated) props.handleDelete();
    else setActivated(true);
  };

  return (
    <span style={{ cursor: "pointer" }} onClick={handleClick}>
      {message}
    </span>
  );
}

export default DeleteWithConfirmationButton;

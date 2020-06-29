import React, { useState } from "react";

function LikeForm(props) {
  const [activated, setActivated] = useState(false);
  const message = activated ? "Confirm?" : "Delete";

  const handleClick = () => {
    if (activated) props.handleDelete();
    else setActivated(true);
  };

  return (
    <button className="button-delete" onClick={handleClick}>
      {message}
    </button>
  );
}

export default LikeForm;

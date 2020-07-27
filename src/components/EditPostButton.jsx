import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function EditPostButton(props) {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/posts/${props.id}/edit`);
  };

  return (
    <button
      className="button-action"
      style={{ marginRight: "0.25em" }}
      onClick={handleClick}
    >
      Edit
    </button>
  );
}

export default EditPostButton;

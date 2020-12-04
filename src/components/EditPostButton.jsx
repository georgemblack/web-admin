import { useState } from "react";
import { useHistory } from "react-router-dom";

function EditPostButton(props) {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/posts/${props.id}/edit`);
  };

  return (
    <span style={{ cursor: "pointer" }} onClick={handleClick}>
      📝
    </span>
  );
}

export default EditPostButton;

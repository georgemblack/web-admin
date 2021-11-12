import { useState } from "react";
import { useHistory } from "react-router-dom";

function EditPostButton(props) {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/posts/${props.id}/edit`);
  };

  return (
    <span
      onClick={handleClick}
      className="inline-block p-2 m-1 text-sm bg-gray-600 rounded-full cursor-pointer lg:p-0 lg:m-0 lg:text-base lg:bg-transparent"
    >
      📝
    </span>
  );
}

export default EditPostButton;

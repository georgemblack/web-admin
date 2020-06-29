import React, { useState, useEffect } from "react";

function LikeForm(props) {
  const [text, setText] = useState("Delete");
  const [activated, setActivated] = useState(false);

  const handleClick = () => {
    if (activated) props.handleDelete();
    else setActivated(true);
  };

  useEffect(() => {
    if (activated) setText("Are you sure?");
    else setText("Delete");
  }, [activated]);

  return (
    <button className="button-delete" onClick={handleClick}>
      {text}
    </button>
  );
}

export default LikeForm;

import React, { useState, useEffect } from "react";

function TextListInput(props) {
  let initialText = "";
  if (props.value && props.value.length > 0) {
    initialText = props.value.join(" ");
  }
  const [text, setText] = useState(initialText);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(text.trim().split(" "));
    }
  }, [text]);

  return (
    <input
      type="text"
      value={text}
      placeholder={props.placeholder}
      onChange={(event) => setText(event.target.value)}
    ></input>
  );
}

export default TextListInput;

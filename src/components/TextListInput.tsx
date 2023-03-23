import { useState } from "react";

import EmojiButton from "./EmojiButton";
import Input from "./Input";

function TextListInput(props) {
  const list = props.value ? props.value : [];
  const [activeItem, setActiveItem] = useState("");

  const addActiveItemToList = () => {
    if (activeItem == "") {
      return;
    }
    if (props.onChange) {
      props.onChange([...list, activeItem]);
    }
    setActiveItem("");
  };

  const removeItemFromList = (event) => {
    if (props.onChange) {
      let newList = [...list];
      newList.splice(list.indexOf(event.target.innerText), 1);
      props.onChange(newList);
    }
  };

  const display = list.map((item, index) => {
    return (
      <span
        className="mr-2 text-gray-500"
        key={index}
        onClick={removeItemFromList}
      >
        {item}
      </span>
    );
  });

  return (
    <div>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          value={activeItem}
          placeholder={props.placeholder}
          onChange={(event) => setActiveItem(event.target.value)}
        ></Input>
        <EmojiButton
          type="button"
          name="text-list-add"
          onClick={addActiveItemToList}
        >
          ▶️
        </EmojiButton>
      </div>
      <div className="px-4">
        {list.length != 0 && display}
        {list.length == 0 && (
          <span className="mr-2 text-gray-500">No tags</span>
        )}
      </div>
    </div>
  );
}

export default TextListInput;

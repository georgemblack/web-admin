import { useState } from "react";

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
      <span key={index} onClick={removeItemFromList}>
        {item}
      </span>
    );
  });

  return (
    <div>
      <input
        type="text"
        value={activeItem}
        placeholder={props.placeholder}
        onChange={(event) => setActiveItem(event.target.value)}
      ></input>
      <button type="button" name="text-list-add" onClick={addActiveItemToList}>
        ▶️
      </button>
      <div>{list.length != 0 && <p>{display}</p>}</div>
    </div>
  );
}

export default TextListInput;

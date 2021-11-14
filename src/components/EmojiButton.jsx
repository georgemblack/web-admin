function EmojiButton(props) {
  return (
    <button
      type={props.type || "button"}
      name={props.name || "emoji-button"}
      onClick={props.onClick}
      className="inline-block p-2 bg-gray-600 rounded-full cursor-pointer lg:p-0 lg:m-0 lg:text-base lg:bg-transparent"
    >
      {props.children}
    </button>
  );
}

export default EmojiButton;

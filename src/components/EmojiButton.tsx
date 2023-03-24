function EmojiButton(props: {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  name?: string;
  onClick: any;
  children: any;
}) {
  return (
    <button
      type={props.type || "button"}
      name={props.name || "emoji-button"}
      onClick={props.onClick}
      className="inline-block cursor-pointer rounded-full bg-gray-600 p-2 lg:m-0 lg:bg-transparent lg:p-0 lg:text-base"
    >
      {props.children}
    </button>
  );
}

export default EmojiButton;

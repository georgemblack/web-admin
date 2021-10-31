function Button(props) {
  return (
    <div>
      <button
        className={"bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full"}
        onClick={props.onClick}
      >
        <span className={"text-gray-50"}>{props.children}</span>
      </button>
    </div>
  );
}

export default Button;

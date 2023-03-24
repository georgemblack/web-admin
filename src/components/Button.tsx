function Button(props: {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  name?: string;
  onClick?: any;
  children: any;
}) {
  return (
    <button
      type={props.type || "button"}
      name={props.name || "button"}
      className="rounded-full bg-blue-500 px-4 py-2 hover:bg-blue-700"
      onClick={props.onClick}
    >
      <span className="text-gray-50">{props.children}</span>
    </button>
  );
}

export default Button;

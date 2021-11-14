function Input(props) {
  return (
    <input
      type={props.type || "text"}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded-full appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
    />
  );
}

export default Input;

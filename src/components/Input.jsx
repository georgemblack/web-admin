function Input(props) {
  return (
    <input
      type={props.type || "text"}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="w-full appearance-none rounded-full border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
    />
  );
}

export default Input;

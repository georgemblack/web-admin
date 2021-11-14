function TextArea(props) {
  return (
    <textarea
      type="text"
      placeholder={props.placeholder || ""}
      value={props.value}
      onChange={props.onChange}
      className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 appearance-none h-96 rounded-2xl focus:outline-none focus:bg-white focus:border-blue-500"
    />
  );
}

export default TextArea;

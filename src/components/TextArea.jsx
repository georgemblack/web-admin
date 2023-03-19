function TextArea({ placeholder, value, onChange }) {
  return (
    <textarea
      type="text"
      placeholder={placeholder || ""}
      value={value}
      onChange={onChange}
      className="mt-2 h-96 w-full appearance-none rounded-2xl border-2 border-gray-200 bg-gray-200 px-3 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
    />
  );
}

export default TextArea;

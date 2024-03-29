import { useNavigate } from "react-router-dom";

function EditPostButton(props: { id: string }) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${props.id}/edit`);
  };

  return (
    <span
      onClick={handleClick}
      className="mx-1 inline-block cursor-pointer rounded-full bg-gray-600 p-2 text-sm lg:m-0 lg:bg-transparent lg:p-0 lg:text-base"
    >
      📝
    </span>
  );
}

export default EditPostButton;

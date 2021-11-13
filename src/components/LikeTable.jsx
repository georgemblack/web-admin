import { useContext, useEffect } from "react";

import GlobalContext from "../context/GlobalContext";
import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton.jsx";
import DomainName from "./DomainName.jsx";
import Time from "./Time.jsx";

function LikeTable(props) {
  const { likes, getLikes, deleteLike } = useContext(GlobalContext);

  const handleDelete = (like) => {
    deleteLike(like.id);
  };

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <>
      <h2 className="mt-4 text-2xl">Likes</h2>
      {likes.map((like) => (
        <div className="flex flex-col justify-between px-3 py-2 mt-2 bg-gray-800 rounded lg:flex-row">
          <p className="text-white">{like.title}</p>
          <div className="flex items-end justify-between mt-1 lg:m-0">
            <div className="inline-block text-white opacity-25 lg:mr-4 lg:opacity-100">
              <Time timestamp={like.timestamp._seconds} />
            </div>
            <div className="inline-block">
              <DeleteWithConfirmationButton
                handleDelete={() => handleDelete(like)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default LikeTable;

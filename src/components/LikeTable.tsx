import { useContext, useEffect } from "react";

import GlobalContext from "../context/GlobalContext";
import IGlobalContext from "../context/IGlobalContext";
import { Like } from "../data/Types";
import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton";
import Time from "./Time";

function LikeTable() {
  const { likes, getLikes, deleteLike } = useContext(
    GlobalContext
  ) as IGlobalContext;

  const handleDelete = (like: Like) => {
    deleteLike(like.id);
  };

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <>
      <h2 className="mt-4 text-2xl">Likes</h2>
      {likes.map((like) => (
        <div
          key={like.id}
          className="flex flex-col justify-between px-3 py-2 mt-2 bg-gray-800 rounded lg:flex-row"
        >
          <p className="text-white">{like.title}</p>
          <div className="flex items-end justify-between mt-1 lg:m-0">
            <div className="inline-block text-white opacity-25 lg:mr-4 lg:opacity-100">
              <Time timestamp={like.timestamp} />
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

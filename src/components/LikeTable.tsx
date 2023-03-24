import { useContext, useEffect } from "react";

import { Like } from "../data/Types";
import GlobalContext from "../context/GlobalContext";
import IGlobalContext from "../context/IGlobalContext";
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
          className="mt-2 flex flex-col justify-between rounded bg-gray-800 px-3 py-2 lg:flex-row"
        >
          <p className="text-white">{like.title}</p>
          <div className="mt-1 flex items-end justify-between lg:m-0">
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

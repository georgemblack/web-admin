import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getLikesSelector } from "../store/Selectors";
import { getLikes, deleteLike } from "../store/actions/Likes";
import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton.jsx";

function LikeTable(props) {
  const dispatch = useDispatch();
  const likes = useSelector(getLikesSelector);

  const handleDelete = (like) => {
    dispatch(deleteLike(like.id));
  };

  useEffect(() => {
    dispatch(getLikes());
  }, []);

  return (
    <>
      <h2>Likes</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {likes.map((like) => (
            <tr key={like.id}>
              <td>{like.title}</td>
              <td>{like.url}</td>
              <td>
                <DeleteWithConfirmationButton
                  handleDelete={() => handleDelete(like)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default LikeTable;

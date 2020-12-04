import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getLikesSelector } from "../store/Selectors";
import { getLikes, deleteLike } from "../store/actions/Likes";
import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton.jsx";
import DomainName from "./DomainName.jsx";
import Time from "./Time.jsx";

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
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Domain</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {likes.map((like) => (
              <tr key={like.id}>
                <td>{like.title}</td>
                <td>
                  <DomainName url={like.url} />
                </td>
                <td>
                  <Time timestamp={like.timestamp._seconds} />
                </td>
                <td>
                  <DeleteWithConfirmationButton
                    handleDelete={() => handleDelete(like)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LikeTable;

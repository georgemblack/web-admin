import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getViewsSelector } from "../store/Selectors";
import { getViews, deleteView } from "../store/actions/Views";
import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton.jsx";
import Time from "./Time.jsx";

function ViewTable(props) {
  const dispatch = useDispatch();
  const views = useSelector(getViewsSelector);

  const handleDelete = (view) => {
    dispatch(deleteView(view.id));
  };

  useEffect(() => {
    dispatch(getViews());
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <h2>Views</h2>
        <button onClick={() => dispatch(getViews())}>Refresh</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>UA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {views.map((view) => (
            <tr key={view.id}>
              <td>
                <Time timestamp={view.timestamp} />
              </td>
              <td>{view.userAgent}</td>
              <td style={{ width: "6em" }}>
                <DeleteWithConfirmationButton
                  handleDelete={() => handleDelete(view)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ViewTable;

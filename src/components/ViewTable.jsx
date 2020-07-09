import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getViewsSelector } from "../store/Selectors";
import { getViews, deleteView } from "../store/actions/Views";
import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton.jsx";
import Time from "./Time.jsx";

function ViewTable(props) {
  const dispatch = useDispatch();
  const views = useSelector(getViewsSelector);

  useEffect(() => {
    dispatch(getViews());
  }, []);

  const handleDelete = (view) => {
    dispatch(deleteView(view.id));
  };

  const formatReferrer = (referrer) => {
    let cleaned = referrer
      .replace("https://", "")
      .replace("georgeblack.me", "");
    if (cleaned.length > 40) {
      cleaned = cleaned.substring(0, 37) + "...";
    }
    return cleaned;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <h2>Views: {views.length}</h2>
        <button onClick={() => dispatch(getViews())}>Refresh</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Browser</th>
            <th>Timezone</th>
            <th>Path</th>
            <th>Referrer</th>
            <th>Width</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {views.map((view) => (
            <tr key={view.id}>
              <td>
                <Time timestamp={view.timestamp} />
              </td>
              <td>{view.browser}</td>
              <td>{view.timezone}</td>
              <td>{view.pathname}</td>
              <td>{formatReferrer(view.referrer)}</td>
              <td>{view.windowInnerWidth}</td>
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
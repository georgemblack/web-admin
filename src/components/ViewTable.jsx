import { useContext, useEffect } from "react";

import GlobalContext from "../context/GlobalContext";
import Button from "./Button.jsx";
import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton.jsx";
import Time from "./Time.jsx";

function ViewTable(props) {
  const { views, getViews, deleteView } = useContext(GlobalContext);

  useEffect(() => {
    getViews();
  }, []);

  const handleDelete = (view) => {
    deleteView(view.id);
  };

  const formatReferrer = (referrer) => {
    let cleaned = referrer.replace("https://", "").replace("george.black", "");
    if (cleaned.length > 40) {
      cleaned = cleaned.substring(0, 37) + "...";
    }
    return cleaned;
  };

  const formatLocation = (view) => {
    if (view.cityName && view.regionName && view.countryCode) {
      return `${view.cityName}, ${view.regionName} ${view.countryCode}`;
    }
    return view.dataCenterCode;
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="mt-4 text-2xl">Views: {views.length}</h2>
        <Button onClick={() => getViews()}>Refresh</Button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Browser</th>
              <th>Location</th>
              <th>Path</th>
              <th>Referrer</th>
              <th>Width</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {views.map((view) => (
              <tr key={view.id}>
                <td>
                  <Time timestamp={view.timestamp} />
                </td>
                <td>{view.browser}</td>
                <td>{formatLocation(view)}</td>
                <td>{view.pathname}</td>
                <td>{formatReferrer(view.referrer)}</td>
                <td>{view.windowInnerWidth}</td>
                <td>
                  <DeleteWithConfirmationButton
                    handleDelete={() => handleDelete(view)}
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

export default ViewTable;

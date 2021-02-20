import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getBinSelector } from "../store/Selectors";
import { getBinLinks, deleteBinLink } from "../store/actions/Bin";
import DeleteWithConfirmationButton from "./DeleteWithConfirmationButton.jsx";
import Time from "./Time.jsx";

function trimURL(url) {
  const cleaned = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "");
  const trimmed =
    cleaned.length > 35 ? cleaned.substring(0, 32) + "..." : cleaned;
  return trimmed;
}

function BinLinkTable(props) {
  const dispatch = useDispatch();
  const bin = useSelector(getBinSelector);

  const handleDelete = (link) => {
    dispatch(deleteBinLink(link.id));
  };

  useEffect(() => {
    dispatch(getBinLinks());
  }, []);

  return (
    <>
      <h2>Links</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bin.links.map((link) => (
              <tr key={link.id}>
                <td>
                  <a href={link.url}>{trimURL(link.url)}</a>
                </td>
                <td>
                  <Time timestamp={link.timestamp._seconds} />
                </td>
                <td>
                  <DeleteWithConfirmationButton
                    handleDelete={() => handleDelete(link)}
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

export default BinLinkTable;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getBinSelector } from "../store/Selectors";
import { getBinLinks } from "../store/actions/Bin";
import Time from "./Time.jsx";

function BinLinkTable(props) {
  const dispatch = useDispatch();
  const bin = useSelector(getBinSelector);

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
            </tr>
          </thead>
          <tbody>
            {bin.links.map((link) => (
              <tr key={link.id}>
                <td>
                  <a href={link.url}>{link.url}</a>
                </td>
                <td>
                  <Time timestamp={link.timestamp._seconds} />
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

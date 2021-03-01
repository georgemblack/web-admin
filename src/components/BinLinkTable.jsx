import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getBinSelector } from "../store/Selectors";
import { getBinLinks } from "../store/actions/Bin";
import BinLinkRow from "./BinLinkRow.jsx";

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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bin.links.map((link) => (
              <BinLinkRow key={link.id} link={link} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BinLinkTable;

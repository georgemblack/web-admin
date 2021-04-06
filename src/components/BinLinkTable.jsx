import { useContext, seEffect } from "react";
import GlobalContext from "../context/GlobalContext.js";

import BinLinkRow from "./BinLinkRow.jsx";

function BinLinkTable(props) {
  const { binLinks, getBinLinks } = useContext(GlobalContext);

  useEffect(() => {
    getBinLinks();
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
            {binLinks.map((link) => (
              <BinLinkRow key={link.id} link={link} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BinLinkTable;

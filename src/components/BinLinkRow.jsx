import { useDispatch } from "react-redux";
import { deleteBinLink } from "../store/actions/Bin";

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

function BinLinkRow(props) {
  const dispatch = useDispatch();

  const handleDelete = (link) => {
    dispatch(deleteBinLink(link.id));
  };

  return (
    <tr key={props.link.id}>
      <td>
        <a href={props.link.url}>{trimURL(props.link.url)}</a>
      </td>
      <td>
        <Time timestamp={props.link.timestamp._seconds} />
      </td>
      <td>
        <DeleteWithConfirmationButton
          handleDelete={() => handleDelete(props.link)}
        />
      </td>
    </tr>
  );
}

export default BinLinkRow;

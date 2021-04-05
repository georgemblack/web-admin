import { getAuthToken } from "../../utils";

export const GET_BIN_LINKS_SUCCESS = "GET_BIN_LINKS_SUCCESS";
export const DELETE_BIN_LINK_SUCCESS = "DELETE_BIN_LINK_SUCCESS";

function getBinLinksSuccess(links) {
  return { type: GET_BIN_LINKS_SUCCESS, links };
}

function deleteBinLinkSuccess() {
  return { type: DELETE_BIN_LINK_SUCCESS };
}

export function getBinLinks() {
  return async (dispatch, getState) => {
    const authToken = getAuthToken();
    let response = await fetch(`${API_URL}/bin/links`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    let responseBody = await response.json();
    await dispatch(getBinLinksSuccess(responseBody.links));
  };
}

export function deleteBinLink(id) {
  return async (dispatch, getState) => {
    const authToken = getAuthToken();
    await fetch(`${API_URL}/bin/links/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });
    await dispatch(deleteBinLinkSuccess());
    await dispatch(getBinLinks());
  };
}

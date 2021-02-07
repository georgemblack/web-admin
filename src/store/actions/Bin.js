export const GET_BIN_LINKS_SUCCESS = "GET_BIN_LINKS_SUCCESS";

function getBinLinksSuccess(links) {
  return { type: GET_BIN_LINKS_SUCCESS, links };
}

export function getBinLinks() {
  return async (dispatch, getState) => {
    const { authToken } = getState();
    let response = await fetch(`${API_URL}/bin/links`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    let responseBody = await response.json();
    await dispatch(getBinLinksSuccess(responseBody.links));
  };
}

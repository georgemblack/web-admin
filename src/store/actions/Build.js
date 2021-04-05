import { getAuthToken } from "../../utils";

export const POST_BUILD_SUCCESS = "POST_BUILD_SUCCESS";

function postBuildSuccess(build) {
  return { type: POST_BUILD_SUCCESS, build };
}

export function postBuild() {
  return async (dispatch, getState) => {
    const authToken = getAuthToken();
    let response = await fetch(`${API_URL}/builds`, {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    let responseBody = await response.json();
    await dispatch(postBuildSuccess(responseBody));
  };
}

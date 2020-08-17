export const POST_BUILD_SUCCESS = "POST_BUILD_SUCCESS";

function postBuildSuccess() {
  return { type: POST_BUILD_SUCCESS };
}

export function postBuild(payload) {
  return async (dispatch, getState) => {
    const { authToken } = getState();
    await fetch(`${API_URL}/admin/builds`, {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    await dispatch(postBuildSuccess());
  };
}

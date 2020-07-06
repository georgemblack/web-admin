const POST_POST_SUCCESS = "POST_POST_SUCCESS";

function postPostSuccess() {
  return { type: POST_POST_SUCCESS };
}

export function postPost(payload) {
  return async (dispatch, getState) => {
    const { authToken } = getState();
    await fetch(`${API_URL}/admin/posts`, {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    await dispatch(postPostSuccess());
  };
}

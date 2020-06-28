export const POST_LIKE_SUCCESS = "POST_LIKE_SUCCESS";

function success(token) {
  return { type: POST_LIKE_SUCCESS };
}

export function postLike(payload) {
  return async (dispatch, getState) => {
    const { authToken } = getState();
    await fetch(`${API_URL}/likes`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    dispatch(success());
  };
}

export const GET_LIKES_SUCCESS = "GET_LIKES_SUCCESS";
export const POST_LIKE_SUCCESS = "POST_LIKE_SUCCESS";
export const DELETE_LIKE_SUCCESS = "DELETE_LIKE_SUCCESS";

function getLikesSuccess(likes) {
  return { type: GET_LIKES_SUCCESS, likes };
}

function postLikeSuccess() {
  return { type: POST_LIKE_SUCCESS };
}

function deleteLikeSuccess() {
  return { type: DELETE_LIKE_SUCCESS };
}

export function getLikes() {
  return async (dispatch, getState) => {
    const { authToken } = getState();
    let response = await fetch(`${API_URL}/likes`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    let responseBody = await response.json();
    await dispatch(getLikesSuccess(responseBody.likes));
  };
}

export function postLike(payload) {
  return async (dispatch, getState) => {
    const { authToken } = getState();
    await fetch(`${API_URL}/likes`, {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    await dispatch(postLikeSuccess());
    await dispatch(getLikes());
  };
}

export function deleteLike(id) {
  return async (dispatch, getState) => {
    const { authToken } = getState();
    await fetch(`${API_URL}/likes/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });
    await dispatch(deleteLikeSuccess());
    await dispatch(getLikes());
  };
}

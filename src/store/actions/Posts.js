export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const POST_POST_SUCCESS = "POST_POST_SUCCESS";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";

function getPostsSuccess(posts) {
  return { type: GET_POSTS_SUCCESS, posts };
}

function postPostSuccess() {
  return { type: POST_POST_SUCCESS };
}

function deletePostSuccess() {
  return { type: DELETE_POST_SUCCESS };
}

export function getPosts() {
  return async (dispatch, getState) => {
    const { authToken } = getState();
    let response = await fetch(`${API_URL}/admin/posts`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    let responseBody = await response.json();
    await dispatch(getPostsSuccess(responseBody.posts));
  };
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

export function deletePost(id) {
  return async (dispatch, getState) => {
    const { authToken } = getState();
    await fetch(`${API_URL}/admin/posts/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });
    await dispatch(deletePostSuccess());
    await dispatch(getPosts());
  };
}

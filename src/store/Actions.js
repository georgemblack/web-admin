export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";

export function fetchPostsSuccess(posts) {
  return { type: FETCH_POSTS_SUCCESS, posts };
}

export function fetchPosts() {
  return async (dispatch) => {
    let response = await fetch(`${API_URL}/posts`);
    let responseBody = await response.json();
    dispatch(fetchPostsSuccess(responseBody.posts));
  };
}

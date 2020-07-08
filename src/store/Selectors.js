export function getUserIsAuthenticated(state) {
  return state.authToken != "";
}

export function getAuthToken(state) {
  return state.authToken;
}

export function getPostsSelector(state) {
  return state.posts;
}

export function getLikesSelector(state) {
  return state.likes;
}

export function getViewsSelector(state) {
  return state.views;
}

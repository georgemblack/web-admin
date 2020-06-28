export function getUserIsAuthenticated(state) {
  return state.authToken != "";
}

export function getAuthToken(state) {
  return state.authToken;
}

export function getPosts(state) {
  return state.posts;
}

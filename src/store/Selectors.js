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

export function getBuildIDSelector(state) {
  if (state.build.buildID) return state.build.buildID;
  return "";
}

export function getBackupPrefixSelector(state) {
  if (state.backup.backupPrefix) return state.backup.backupPrefix;
  return "";
}

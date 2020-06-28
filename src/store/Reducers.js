import { combineReducers } from "redux";
import { FETCH_POSTS_SUCCESS } from "./Actions";
import initialState from "./State";
import { FETCH_AUTH_TOKEN_SUCCESS } from "./actions/Auth";

function authToken(authToken = initialState.authToken, action) {
  switch (action.type) {
    case FETCH_AUTH_TOKEN_SUCCESS:
      return action.token;
  }
  return authToken;
}

function posts(posts = initialState.posts, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.posts;
  }
  return posts;
}

const rootReducer = combineReducers({
  authToken,
  posts,
});

export default rootReducer;

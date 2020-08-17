import { combineReducers } from "redux";
import initialState from "./State";
import { POST_AUTH_TOKEN_SUCCESS } from "./actions/Auth";
import { GET_LIKES_SUCCESS } from "./actions/Likes";
import { GET_VIEWS_SUCCESS } from "./actions/Views";
import { GET_POSTS_SUCCESS } from "./actions/Posts";
import { POST_BUILD_SUCCESS } from "./actions/Build";

function authToken(authToken = initialState.authToken, action) {
  switch (action.type) {
    case POST_AUTH_TOKEN_SUCCESS:
      return action.token;
  }
  return authToken;
}

function posts(posts = initialState.posts, action) {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return action.posts;
  }
  return posts;
}

function likes(likes = initialState.likes, action) {
  switch (action.type) {
    case GET_LIKES_SUCCESS:
      return action.likes;
  }
  return likes;
}

function views(views = initialState.views, action) {
  switch (action.type) {
    case GET_VIEWS_SUCCESS:
      return action.views;
  }
  return views;
}

function build(build = initialState.build, action) {
  switch (action.type) {
    case POST_BUILD_SUCCESS:
      return action.build;
  }
  return build;
}

const rootReducer = combineReducers({
  authToken,
  posts,
  likes,
  views,
  build,
});

export default rootReducer;

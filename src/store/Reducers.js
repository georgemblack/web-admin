import { combineReducers } from "redux";
import initialState from "./State";
import { GET_LIKES_SUCCESS } from "./actions/Likes";
import { GET_BIN_LINKS_SUCCESS } from "./actions/Bin";
import { GET_VIEWS_SUCCESS } from "./actions/Views";
import { GET_POSTS_SUCCESS } from "./actions/Posts";
import { POST_BUILD_SUCCESS } from "./actions/Build";
import { POST_BACKUP_SUCCESS } from "./actions/Backup";

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

function backup(backup = initialState.backup, action) {
  switch (action.type) {
    case POST_BACKUP_SUCCESS:
      return action.backup;
  }
  return backup;
}

function bin(bin = initialState.bin, action) {
  switch (action.type) {
    case GET_BIN_LINKS_SUCCESS:
      return {
        links: action.links,
      };
  }
  return bin;
}

const rootReducer = combineReducers({
  posts,
  likes,
  views,
  build,
  backup,
  bin,
});

export default rootReducer;

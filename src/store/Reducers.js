import { combineReducers } from "redux";
import initialState from "./State";
import { GET_LIKES_SUCCESS } from "./actions/Likes";
import { GET_BIN_LINKS_SUCCESS } from "./actions/Bin";
import { GET_POSTS_SUCCESS } from "./actions/Posts";

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
  bin,
});

export default rootReducer;

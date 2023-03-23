import { useState } from "react";

import {
  getLikesAPI,
  postLikeAPI,
  deleteLikeAPI,
  getPostsAPI,
  postPostAPI,
  deletePostAPI,
  putPostAPI,
} from "../data/Api";

export default function useGlobalContext() {
  /**
   * User authentication
   */
  const [authToken, setAuthToken] = useState("");
  const userIsAuthenticated = authToken !== "";

  const authenticateUser = (authToken: string) => {
    setAuthToken(authToken);
  };

  /**
   * Web posts
   */
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await getPostsAPI();
    setPosts(response.posts);
  };

  const postPost = async (payload) => {
    await postPostAPI(payload);
    await getPosts();
  };

  const putPost = async (id, payload) => {
    await putPostAPI(id, payload);
    await getPosts();
  };

  const deletePost = async (id: string) => {
    await deletePostAPI(id);
    await getPosts();
  };

  /**
   * Web likes
   */
  const [likes, setLikes] = useState([]);

  const getLikes = async () => {
    const response = await getLikesAPI();
    setLikes(response.likes);
  };

  const postLike = async (payload) => {
    await postLikeAPI(payload);
    await getLikes();
  };

  const deleteLike = async (id: string) => {
    await deleteLikeAPI(id);
    await getLikes();
  };

  return {
    authToken,
    userIsAuthenticated,
    authenticateUser,
    posts,
    getPosts,
    postPost,
    putPost,
    deletePost,
    likes,
    getLikes,
    postLike,
    deleteLike,
  };
}

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
import { Like, NewLike, NewPost, Post } from "../data/Types";

export default function useGlobalContext() {
  /**
   * User authentication
   */
  const [authToken, setAuthToken] = useState<string>("");
  const userIsAuthenticated = authToken !== "";

  const authenticateUser = (authToken: string) => {
    setAuthToken(authToken);
  };

  /**
   * Web posts
   */
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const response = await getPostsAPI();
    setPosts(response);
  };

  const postPost = async (payload: NewPost) => {
    await postPostAPI(payload);
    await getPosts();
  };

  const putPost = async (id: string, payload: NewPost) => {
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
  const [likes, setLikes] = useState<Like[]>([]);

  const getLikes = async () => {
    const response = await getLikesAPI();
    setLikes(response);
  };

  const postLike = async (payload: NewLike) => {
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

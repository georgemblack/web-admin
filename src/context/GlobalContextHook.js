import { useState } from "react";

import {
  getViewsAPI,
  deleteViewAPI,
  getLikesAPI,
  postLikeAPI,
  deleteLikeAPI,
  getPostsAPI,
  postPostAPI,
  deletePostAPI,
  putPostAPI,
  getBinLinksAPI,
  deleteBinLinkAPI,
} from "../data/Api";

export default function useGlobalContext() {
  /**
   * User authentication
   */
  const [authToken, setAuthToken] = useState("");
  const userIsAuthenticated = authToken !== "";

  const authenticateUser = (authToken) => {
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

  const deletePost = async (id) => {
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

  const deleteLike = async (id) => {
    await deleteLikeAPI(id);
    await getLikes();
  };

  /**
   * Web views
   */
  const [views, setViews] = useState([]);

  const getViews = async () => {
    const response = await getViewsAPI();
    setViews(response.views);
  };

  const deleteView = async (id) => {
    await deleteViewAPI(id);
    await getViews();
  };

  /**
   * Bin links
   */
  const [binLinks, setBinLinks] = useState([]);

  const getBinLinks = async () => {
    const response = await getBinLinksAPI();
    setBinLinks(response.links);
  };

  const deleteBinLink = async (id) => {
    await deleteBinLinkAPI(id);
    await getBinLinks();
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
    views,
    getViews,
    deleteView,
    binLinks,
    getBinLinks,
    deleteBinLink,
  };
}

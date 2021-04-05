import { useState } from "react";

import {
  getViewsAPI,
  deleteViewAPI,
  getLikesAPI,
  postLikeAPI,
  deleteLikeAPI,
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
   * Web Likes
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

  return {
    authToken,
    userIsAuthenticated,
    authenticateUser,
    views,
    getViews,
    deleteView,
    likes,
    getLikes,
    postLike,
    deleteLike,
  };
}

import { useState } from "react";

import { getViewsAPI, deleteViewAPI } from "../data/Api";

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

  return {
    authToken,
    userIsAuthenticated,
    authenticateUser,
    views,
    getViews,
    deleteView,
  };
}

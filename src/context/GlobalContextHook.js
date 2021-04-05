import { useState } from "react";

import { getViewsAPI, deleteViewAPI } from "../data/Api";

export default function useGlobalContext() {
  const [authToken, setAuthToken] = useState("");
  const [views, setViews] = useState([]);

  const userIsAuthenticated = authToken !== "";

  const authenticateUser = (authToken) => {
    setAuthToken(authToken);
  };

  const getViews = async () => {
    const response = await getViewsAPI();
    setViews(response.views);
  };

  const deleteView = async (id) => {
    await deleteViewAPI(id);
    await getViews();
  };

  return {
    authToken,
    userIsAuthenticated,
    authenticateUser,
    views,
    getViews,
    deleteView,
  };
}

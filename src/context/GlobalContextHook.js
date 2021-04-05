import { useState } from "react";

export default function useGlobalContext() {
  const [authToken, setAuthToken] = useState("");

  const userIsAuthenticated = authToken !== "";

  const authenticateUser = (authToken) => {
    setAuthToken(authToken);
  };

  return {
    authToken,
    userIsAuthenticated,
    authenticateUser,
  };
}

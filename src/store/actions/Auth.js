export const FETCH_AUTH_TOKEN_SUCCESS = "FETCH_AUTH_TOKEN_SUCCESS";

function success(token) {
  return { type: FETCH_AUTH_TOKEN_SUCCESS, token };
}

export function fetchAuthToken(username, password) {
  return async (dispatch) => {
    const userPassEncoded = btoa(`${username.trim()}:${password.trim()}`);
    let response = await fetch(`${API_URL}/auth`, {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${userPassEncoded}`,
        "Content-Type": "application/json",
      },
    });
    let responseBody = await response.json();
    dispatch(success(responseBody.token));
  };
}

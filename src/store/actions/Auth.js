export const POST_AUTH_TOKEN_SUCCESS = "POST_AUTH_TOKEN_SUCCESS";

function postAuthTokenSuccess(token) {
  return { type: POST_AUTH_TOKEN_SUCCESS, token };
}

export function postAuthToken(username, password) {
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
    dispatch(postAuthTokenSuccess(responseBody.token));
  };
}

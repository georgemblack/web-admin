export const AUTH_TOKEN_SUCCESS = "AUTH_TOKEN_SUCCESS";

function authTokenSuccess(token) {
  return { type: AUTH_TOKEN_SUCCESS, token };
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

    // set token in local storage
    window.localStorage.setItem("token", responseBody.token);

    dispatch(authTokenSuccess(responseBody.token));
  };
}

export function setAuthToken(token) {
  return async (dispatch) => {
    dispatch(authTokenSuccess(token));
  };
}

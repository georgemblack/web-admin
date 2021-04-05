async function postAuthToken(username, password) {
  const userPassEncoded = btoa(`${username.trim()}:${password.trim()}`);
  const response = await fetch(`${API_URL}/auth`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${userPassEncoded}`,
      "Content-Type": "application/json",
    },
  });
  const responseBody = await response.json();
  return responseBody.token;
}

module.exports = {
  postAuthToken,
};

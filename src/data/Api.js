import { getAuthToken } from "../utils";

export async function postAuthToken(username, password) {
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

export async function postBackup() {
  const authToken = getAuthToken();
  const response = await fetch(`${API_URL}/backups`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  const responseBody = await response.json();
  return responseBody;
}

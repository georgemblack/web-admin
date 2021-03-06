import { getAuthToken } from "../utils";

export async function postAuthTokenAPI(username, password) {
  const userPassEncoded = btoa(`${username.trim()}:${password.trim()}`);
  const response = await fetch(`${API_URL}/auth`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${userPassEncoded}`,
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export async function postBackupAPI() {
  const authToken = getAuthToken();
  const response = await fetch(`${API_URL}/backups`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return await response.json();
}

export async function postBuildAPI() {
  const authToken = getAuthToken();
  let response = await fetch(`${API_URL}/builds`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return await response.json();
}

export async function getPostsAPI() {
  const authToken = getAuthToken();
  let response = await fetch(`${API_URL}/posts`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return await response.json();
}

export async function postPostAPI(payload) {
  const authToken = getAuthToken();
  await fetch(`${API_URL}/posts`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function putPostAPI(id, payload) {
  const authToken = getAuthToken();
  await fetch(`${API_URL}/posts/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function deletePostAPI(id) {
  const authToken = getAuthToken();
  await fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });
}

export async function getLikesAPI() {
  const authToken = getAuthToken();
  let response = await fetch(`${API_URL}/likes`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return await response.json();
}

export async function postLikeAPI(payload) {
  const authToken = getAuthToken();
  await fetch(`${API_URL}/likes`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function deleteLikeAPI(id) {
  const authToken = getAuthToken();
  await fetch(`${API_URL}/likes/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });
}

export async function getViewsAPI() {
  const authToken = getAuthToken();
  let response = await fetch(`${API_URL}/stats/views`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.json();
}

export async function deleteViewAPI(id) {
  const authToken = getAuthToken();
  await fetch(`${API_URL}/stats/views/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });
}

export async function getBinLinksAPI() {
  const authToken = getAuthToken();
  let response = await fetch(`${API_URL}/bin/links`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return await response.json();
}

export async function deleteBinLinkAPI(id) {
  const authToken = getAuthToken();
  await fetch(`${API_URL}/bin/links/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });
}

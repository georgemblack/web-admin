import { getAuthToken } from "../utils";
import { AuthToken, Post, NewPost, Like, NewLike } from "./Types";

let { API_URL } = process.env;

export async function postAuthTokenAPI(
  username: string,
  password: string
): Promise<AuthToken> {
  const userPassEncoded = btoa(`${username.trim()}:${password.trim()}`);
  const response = await fetch(`${API_URL}/auth`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${userPassEncoded}`,
      "Content-Type": "application/json",
    },
  });
  return (await response.json()) as AuthToken;
}

export async function getPostsAPI(): Promise<Post[]> {
  const authToken = getAuthToken();
  let response = await fetch(`${API_URL}/posts`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  const responseBody = await response.json();
  return responseBody.posts as Post[];
}

export async function postPostAPI(payload: NewPost): Promise<void> {
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

export async function putPostAPI(id: string, payload: NewPost): Promise<void> {
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

export async function deletePostAPI(id: string) {
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

export async function getLikesAPI(): Promise<Like[]> {
  const authToken = getAuthToken();
  let response = await fetch(`${API_URL}/likes`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  const responseBody = await response.json();
  return responseBody.likes as Like[];
}

export async function postLikeAPI(payload: NewLike) {
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

export async function deleteLikeAPI(id: string): Promise<void> {
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

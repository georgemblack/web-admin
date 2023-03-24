import { Post, NewPost, Like, NewLike } from "../data/Types";

interface IGlobalContext {
  authToken: string;
  userIsAuthenticated: boolean;
  authenticateUser: (token: string) => void;
  posts: Post[];
  getPosts: () => void;
  postPost: (payload: NewPost) => void;
  putPost: (id: string, payload: NewPost) => void;
  deletePost: (id: string) => void;
  likes: Like[];
  getLikes: () => void;
  postLike: (payload: NewLike) => void;
  deleteLike: (id: string) => void;
}

export default IGlobalContext;

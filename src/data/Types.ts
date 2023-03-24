interface AuthToken {
  token: string;
}

interface Build {
  buildID: string;
}

interface PostMetadata {
  title: string;
  slug: string;
  draft: boolean;
}

interface Timestamp {
  _seconds: number;
  _nanoseconds: number;
}

interface Post {
  id: string;
  metadata: PostMetadata;
  published: Timestamp;
  content: string;
  contentHtml: string;
  contentHtmlPreview: string;
}

interface NewPost {
  metadata: PostMetadata;
  content: string;
  published: Date;
}

interface Like {
  id: string;
  title: string;
  url: string;
  timestamp: Timestamp;
}

interface NewLike {
  title: string;
  url: string;
}

export { AuthToken, Build, Post, NewPost, Like, NewLike, Timestamp };

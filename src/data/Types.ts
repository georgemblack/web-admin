interface AuthToken {
  token: string;
}

interface Build {
  buildID: string;
}

interface Timestamp {
  _seconds: number;
  _nanoseconds: number;
}

interface Post {
  id: string;
  title: string;
  slug: string;
  draft: boolean;
  published: Timestamp;
  content: string;
  contentHtml: string;
  contentHtmlPreview: string;
}

interface NewPost {
  title: string;
  slug: string;
  draft: boolean;
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

interface AuthToken {
  token: string;
}

interface Build {
  buildID: string;
}

interface Post {
  id: string;
  title: string;
  slug: string;
  draft: boolean;
  listed: boolean;
  published: string;
  content: string;
  contentHtml: string;
  contentHtmlPreview: string;
}

interface NewPost {
  title: string;
  slug: string;
  draft: boolean;
  listed: boolean;
  content: string;
  published: Date;
}

interface Like {
  id: string;
  title: string;
  url: string;
  timestamp: string;
}

interface NewLike {
  title: string;
  url: string;
}

export { AuthToken, Build, Post, NewPost, Like, NewLike };

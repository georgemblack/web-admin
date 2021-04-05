export function slugify(text) {
  let slug;
  slug = text.toLowerCase();
  slug = slug.replace(/[^a-z0-9 ]/, "");
  slug = slug.replaceAll(" ", "-");
  return slug;
}

export function getAuthToken() {
  return window.localStorage.getItem("token");
}

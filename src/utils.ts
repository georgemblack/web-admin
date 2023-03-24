export function getAuthToken(): string {
  const result = window.localStorage.getItem("token");
  return result ? result : "";
}

export function slugify(text: string): string {
  let slug;
  slug = text.toLowerCase();
  slug = slug.replace(/[^a-z0-9 ]/, "");
  slug = slug.replaceAll(" ", "-");
  return slug;
}

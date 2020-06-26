export const UPDATE_MESSAGE = "UPDATE_MESSAGE";

export function updateMessage(text) {
  return { type: UPDATE_MESSAGE, text };
}

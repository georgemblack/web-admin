import { getAuthToken } from "../../utils";

export const POST_BACKUP_SUCCESS = "POST_BACKUP_SUCCESS";

function postBackupSuccess(backup) {
  return { type: POST_BACKUP_SUCCESS, backup };
}

export function postBackup() {
  return async (dispatch, getState) => {
    const authToken = getAuthToken();
    let response = await fetch(`${API_URL}/backups`, {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    let responseBody = await response.json();
    await dispatch(postBackupSuccess(responseBody));
  };
}

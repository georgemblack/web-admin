export const GET_VIEWS_SUCCESS = "GET_VIEWS_SUCCESS";
export const DELETE_VIEW_SUCCESS = "DELETE_VIEW_SUCCESS";

function getViewsSuccess(views) {
  return { type: GET_VIEWS_SUCCESS, views };
}

function deleteViewSuccess() {
  return { type: DELETE_VIEW_SUCCESS };
}

export function getViews() {
  return async (dispatch, getState) => {
    const { authToken } = getState();
    let response = await fetch(`${API_URL}/views`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    let responseBody = await response.json();
    await dispatch(getViewsSuccess(responseBody.views));
  };
}

export function deleteView(id) {
  return async (dispatch, getState) => {
    const { authToken } = getState();
    await fetch(`${API_URL}/views/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });
    await dispatch(deleteViewSuccess());
    await dispatch(getViews());
  };
}

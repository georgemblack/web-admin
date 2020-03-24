export const GET_ALL_VIEWS = "GET_ALL_VIEWS";
export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";

export default {
  [GET_ALL_VIEWS](state, payload) {
    state.views = payload.views;
  },
  [SET_AUTH_TOKEN](state, payload) {
    state.authToken = payload.token;
  },
};

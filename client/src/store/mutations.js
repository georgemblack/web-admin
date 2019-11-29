export const GET_ALL_VIEWS = 'GET_ALL_VIEWS'

export default {
  [GET_ALL_VIEWS](state, payload) {
    state.views = payload.data
  }
}

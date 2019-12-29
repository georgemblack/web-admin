import {
  GET_ALL_VIEWS,
  SET_AUTH_TOKEN
} from './mutations'

export default {
  getAllViews: ({ commit, getters }) => {
    fetch('/api/views', {
      headers: {
        'Authorization': `Bearer ${getters.authToken}`
      }
    })
      .then(response => {
        response.json().then(responseData => {
          commit(GET_ALL_VIEWS, responseData)
        })
      })
  },
  getAuthToken: ({ commit }, payload) => {
    const userPassEncoded = btoa(`${payload.username}:${payload.password}`)
    fetch('/auth', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${userPassEncoded}`
      }
    })
      .then(response => {
        response.json().then(responseData => {
          commit(SET_AUTH_TOKEN, responseData)
        })
      })
  }
}

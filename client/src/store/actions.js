import {
  GET_ALL_VIEWS,
} from './mutations'

export default {
  getAllViews: ({ commit }) => {
    fetch('/api/views').then(response => {
      response.json().then(responseData => {
        commit(GET_ALL_VIEWS, responseData)
      })
    })
  }
}

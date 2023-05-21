import * as api from '../api'
const me = {
  namespaced: true,
  state: {
    currentUser: null
  },
  mutations: {
    setCurrentUser (state, payload) {
      state.currentUser = payload
    }
  },
  actions: {
    getCurrentUser ({commit, state}) {
      api.getCurrentUser(currentUser => {
        commit('setCurrentUser', JSON.parse(currentUser))
      })
    }
  }
}
export default me
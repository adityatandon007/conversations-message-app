import * as api from '../api'
const conversation = {
  namespaced: true,
  state: {
    messages: []
  },
  mutations: {
    setMessages (state, payload) {
      state.messages = payload
    },
    addMessage(state, payload) {
      state.messages.push(payload)
    }
  },
  actions: {
    getAllMessages ({commit}) {
      api.getAllMessages(messages => {
        commit('setMessages', JSON.parse(messages))
      })
    },
    sendMessage ({commit, state}, payload) {
      const id = state.messages.length + 1
      const messagePayload = {id, text: payload}
      api.createMessage(messagePayload, message => {
        commit('addMessage', message)
      })
    }
  }
}
export default conversation
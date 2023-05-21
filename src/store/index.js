import Vue from 'vue'
import Vuex from 'vuex'
import me from './me'
import conversation from './conversation'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    conversation,
    me
  }
})

export default store
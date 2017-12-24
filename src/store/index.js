import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: "",
    password: "",
    phone: "",
    message: 'Hello World!!!'
  },
  mutations: {
    setEmail (state, payload) {
      state.email = payload
    },
    setPassword (state, payload) {
      state.password = payload
    },
    setPhone (state, payload) {
      state.phone = payload
    }
  },
  actions: {

  },
  getters: {

  }
})

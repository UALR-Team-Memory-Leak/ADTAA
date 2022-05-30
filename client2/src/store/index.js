import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
          userData.token
      }`
      console.log(userData.token)
  }
  },
  actions: {
    login ({commit}, credentials) {
      return axios.post('http://localhost:3333/api/v0/auth/login', credentials)
          .then(({data}) => {
              commit('SET_USER_DATA', data)
          })
  }
  },
  modules: {
  }
})

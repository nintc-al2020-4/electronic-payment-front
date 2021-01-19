import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      balance: 0,
      token: null
    }
  },
  mutations: {
    setBalance(state, balance) {
      state.balance = balance
    },
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async retrieveBalance(context) {
      await axios
        .get('/wallet', {
          baseURL: process.env.VUE_APP_API_URL_BASE,
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + context.state.token
          },
          responseType: 'json'
        })
        .then((response) => {
          const balance = response.data.balance
          context.commit('setBalance', balance)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})

export default store

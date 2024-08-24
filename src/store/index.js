import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import messages from './modules/messages'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    messages
  },
  state: {
    token: localStorage.getItem('authToken') || '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('authToken', token);
    },
    clearToken(state) {
      state.token = '';
      localStorage.removeItem('authToken');
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('http://localhost:8000/api/auth/login/', credentials);
        commit('setToken', response.data.token);
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    async register({ commit }, credentials) {
      try {
        const response = await axios.post('http://localhost:8000/api/auth/register/', credentials);
        commit('setToken', response.data.token);
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
    logout({ commit }) {
      commit('clearToken');
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
  }
});

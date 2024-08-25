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
    },
    setUserInfo(state, userInfo) {
      state.username = userInfo.username;
      state.email = userInfo.email;
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('http://localhost:8000/api/auth/login/', credentials);
        commit('setToken', response.data.access);
      } catch (error) {
        alert(`Password Failed ; Again please ! ${error.response.data.error || error.response.data.detail}`);
      }
    },
    async register({ commit }, credentials) {
      try {
        const response = await axios.post('http://localhost:8000/api/auth/register/', credentials);
        commit('setToken', response.data.access);
      } catch (error) {
        alert('Registration error:', error);
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

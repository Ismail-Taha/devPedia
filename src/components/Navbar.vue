<template>
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link v-if="!isAuthenticated" to="/sign-in" class="nav-link">Sign In</router-link>
      <router-link v-if="!isAuthenticated" to="/sign-up" class="nav-link">Sign Up</router-link>
      <router-link v-if="isAuthenticated" to="/dashboard" class="nav-link">Dashboard</router-link>
      <button v-if="isAuthenticated" @click="logout" class="nav-link">Logout</button>
    </nav>
  </template>

  <script>
  export default {
    data() {
      return {
        isAuthenticated: false,
      };
    },
    created() {
      // Check if user is authenticated (this can be improved by checking a Vuex state or localStorage)
      this.isAuthenticated = !!localStorage.getItem('authToken');
    },
    methods: {
      logout() {
        localStorage.removeItem('authToken');
        this.isAuthenticated = false;
        this.$router.push('/');
      }
    }
  };
  </script>

  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-around;
    background-color: #333;
    padding: 1rem;
  }

  .nav-link {
    color: white;
    text-decoration: none;
  }

  .nav-link:hover {
    text-decoration: underline;
  }
  </style>

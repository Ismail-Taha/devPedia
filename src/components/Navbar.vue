<template>
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link v-if="!isAuthenticated" to="/sign-in" class="nav-link">Log In</router-link>
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
    align-items: center;
    background-color: #376366;
    border-radius: 10px;
    padding: 1rem 2rem;
    margin-top: 2%;
  }

  .nav-link {
    box-sizing: border-box;
    color: white;
    margin: 0 1rem;
    transition: color 0.3s ease;
    text-decoration: none;
  }

  .nav-link:hover {
    color: #41B883;
    font-size: 18px;
  }
  .logout-button {
  background-color: transparent;
  border: 1px solid #ECF0F1;
  color: #ECF0F1;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.logout-button:hover {
  background-color: #1ABC9C;
  color: #2C3E50;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .nav-link {
    margin: 0.5rem 0;
  }
}
  </style>

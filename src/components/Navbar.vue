<template>
  <nav class="navbar">
    <div class="logo-container">
      <img src="@/assets/Logo.png" alt="Logo" class="logo">
    </div>
    
    <div  class="nav-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link  to="/sign-in" class="nav-link">Log In</router-link>
      <router-link  to="/sign-up" class="nav-link">Sign Up</router-link>
      <router-link v-if="!isAuthenticated" to="/dashboard" class="nav-link">Dashboard</router-link>
    </div>
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
    this.$router.push('/Sign-Up')
  },
  methods: {
    logout() {
      localStorage.removeItem('authToken');
      this.isAuthenticated = false;
      this.$router.push('/SignUp');
    }
  }
};
</script>

<style scoped>
.navbar {
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #376366;
  border-radius: 10px;
  padding: 1rem 2rem;
  margin-top: 2%;
}

.logo-container {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  justify-content: center; /* Center the links */
  align-items: center;
  flex-grow: 1; /* Allow th*/

}

.logo {
  width: 100px;
  /* Adjust the size of the logo as needed */
  height: auto;
}

.nav-link {
  box-sizing: border-box;
  color: white;
  margin: 0 1rem;
  transition: color 0.3s ease;
  text-decoration: none;
}

.nav-link:hover {
  color: #4b7b7b;
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

  .nav-link .logout-button {
    margin: 0.5rem 0;
  }
}
</style>

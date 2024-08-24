<template>
  <div id="app">
    <Navbar />
    <div id="nav">
      <router-link :to="{ name: 'home' }" class="nav-button">Vue</router-link> |
      <router-link :to="{ name: 'messages' }" class="nav-button">Django</router-link> |
      <router-link :to="{ name: 'activities' }" class="nav-button">Activity Feed</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style scoped>
.nav-button {
  color: white;
  background-color: #42b983;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
}

.nav-button:hover {
  background-color: #2c3e50;
}

  #app {
    font-family: 'Aveni r', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
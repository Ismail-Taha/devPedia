<template>
    <div class="auth-container">
      <h2>Sign In</h2>
      <form @submit.prevent="signIn">
        <div>
          <label>Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  </template>

  <script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      ...mapActions(['login']),
      async signIn() {
        const credentials = {
          email: this.email,
          password: this.password
        };
        await this.login(credentials);
        this.$router.push('/dashboard');
      }
    }
  };
  </script>

  <style scoped>
  /* Add your styles here */
  </style>

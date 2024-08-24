<template>
    <div class="auth-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp">
        <div>
          <label>Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Sign Up</button>
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
      ...mapActions(['register']),
      async signUp() {
        const credentials = {
          email: this.email,
          password: this.password
        };
        await this.register(credentials);
        this.$router.push('/dashboard');
      }
    }
  };
  </script>

  <style scoped>
  /* Add your styles here */
  </style>

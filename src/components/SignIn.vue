<template>
  <div class="auth-wrapper">
    <div class="auth-container">
      <img src="@/assets/Logo.png" alt="Logo" class="Logo">
      <h2>Log In</h2>
      <form @submit.prevent="signIn">
        <div>
          <label>Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
    <h3>Don't have an account ?</h3>
    <button @click="signUp" class="out">Sign up</button>

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
    ...mapActions(['login','logout', 'addUser']),
    async signIn() {
      const credentials = {
        
        email: this.email,
        password: this.password
      };
      try {

        await this.login(credentials);
        this.$router.push('/dashboard');
}
       catch (error) {
        alert();
      }
    },
    async signUp() {
     // await this.logout(); // call the Vuex action to handle logout
      this.$router.push('/sign-up'); // redirect to home after logout
    }
  }
};
</script>

<style scoped>
.auth-wrapper {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
h3 {
  color: #396F6A;
  margin: 40px 0 0;
}
.auth-container {
  padding: 20px;
  background-color: #D1DADB;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input {
  width: calc(100% - 16px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.1);
}

button {
  width: 100%;
  margin-top: 2%;
  padding: 10px;
  background-color: #376366;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2a4b4e;
}

.out {
  margin-top: 20px;
  background-color: #b03a3a;
}

.out:hover {
  background-color: #8a2f2f;
}
</style>

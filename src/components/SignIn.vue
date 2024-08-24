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
    <button @click="signOut" class="out">Log out</button>

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
    ...mapActions(['login', 'logout', 'addUser']),
    async signIn() {
      const credentials = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      try {
        await this.addUser(credentials);

        await this.login(credentials);

        this.$router.push('/dashboard');
      } catch (error) {
        alert("Sign-in failed. Please try again.");
      }
    },
    async signOut() {
      await this.logout(); // call the Vuex action to handle logout
      this.$router.push('/signUp'); // redirect to home after logout
    }
  }
};
</script>

<style scoped>
.auth-wrapper {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
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

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input {
  width: calc(100% - 10px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="email"],
input[type="password"] {

  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.1);
}

button {
  width: 100%;
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
  background-color: #749294;
}
</style>

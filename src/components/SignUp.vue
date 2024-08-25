<template>
  <div class="auth-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
      <div>
        <div>
          <label>Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <label>Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  
  <h3>Already have an account ?</h3>
  <button @click="SignIn" class="out">Sign In</button></div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import SignIn from './SignIn.vue';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    ...mapActions(['register']),
    async signUp() {
      try {
        // Email format validation using regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.email)) {
          alert("Please enter a valid email address.");
          return;
        }

        // Password length validation
        if (this.password.length < 8) {
          alert("Password must be at least 8 characters long.");
          return;
        }

        const credentials = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        const response = await axios.post('http://localhost:8000/api/auth/register/', credentials);
        if (!response || !response.data) {
          alert("No response or data received");
          return;
        }
        this.$store.commit('setToken', response.data.access);
        this.$router.push('/dashboard');
      }
      catch (error) {
        if (error.response && error.response.data) {
          alert(`Sign-up failed: ${error.response.data.error || error.response.data.detail}`);
        } else {
          alert(`Sign-up failed: ${error.message}`);
        }
      }
    }
  }
}
</script>

<style scoped>
h3 {
  color: #396F6A;
  margin: 40px 0 0;
}
.auth-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px 40px;
  background-color: #D1DADB;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.out {
  margin-top: 20px;
  background-color: #b03a3a;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 10px;
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

input[type="email"],
input[type="password"],
input[type="text"] {
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.1);
}

input[type="email"]:focus,
input[type="password"]:focus {
  outline: none;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
}

button[type="submit"] {
  width: 100%;
  height: 40px;
  background-color: #376366;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

button[type="submit"]:hover {
  color: white;
  background-color: #749294;
}

@media (max-width: 768px) {
  .auth-container {
    margin-top: 20vh;
  }
}
</style>

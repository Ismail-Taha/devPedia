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
    .auth-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px 40px;
  background-color: #D1DADB;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

input[type="email"],
input[type="password"] {
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
  background-color: #376366
  ;
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

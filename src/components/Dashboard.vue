<template>
  <div class="dashboard">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="logo">DevPedia</div>
      <ul>
        <li @click="setActivePage('home')">Home</li>
        <li @click="setActivePage('articles')">Articles</li>
        <li @click="setActivePage('categories')">Categories</li>
        <li @click="setActivePage('users')">Users</li>
        <li @click="setActivePage('settings')">Settings</li>
        <li @click="signOut">Logout</li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="header">
        <input type="text" placeholder="Search..." class="search-bar" />
        <div class="user-profile">
          <img src="https://via.placeholder.com/40" alt="User Avatar" />
          <h1>{{ username }}</h1>
        </div>
      </div>

      <div class="content">
        <!-- Dynamic Content Based on Active Page -->
        <div v-if="activePage === 'home'">
          <h2>Welcome to DevPedia</h2>
          <p>Here is an overview of your recent activity...</p>
        </div>

        <div v-if="activePage === 'articles'">
          <h2>Articles</h2>
          <button @click="setActivePage('categories')" class="categories-button">
            Check Categories
          </button>
          <div v-for="(article, index) in articles" :key="index" class="article">
            <h3>{{ article.title }}</h3>
            <p>{{ article.content }}</p>
          </div>
        </div>

        <div v-if="activePage === 'categories'">
          <h2>Categories</h2>
          <p>Manage your categories here...</p>
        </div>

        <div v-if="activePage === 'users'">
          <h2>Users</h2>
          <p>Manage your users here...</p>
        </div>

        <div v-if="activePage === 'settings'">
          <h2>Settings</h2>
          <p>Manage your account settings here...</p>
          <form @submit.prevent="updateSettings">
            <div>
              <label>Username:</label>
              <input type="text" v-model="settings.username" />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" v-model="settings.email" />
            </div>
            <button type="submit" class="save-button">Save Changes</button>
          </form>
        </div>
      </div>


      <div class="footer">
        <p>&copy; 2024 DevPedia. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';


export default {
  computed: {
    username() {
      return this.$store.state.username;
      // Assuming you've stored the username in Vuex
    }
  },
  data() {
    return {
      activePage: 'home',
      articles: [
        {
          title: "Introduction to Vue.js",
          content: "Vue.js is a progressive JavaScript framework for building user interfaces..."
        },
        {
          title: "Getting Started with Django",
          content: "Django is a high-level Python web framework that encourages rapid development..."
        },
        {
          title: "Understanding React",
          content: "React is a JavaScript library for building user interfaces, maintained by Facebook..."
        }
      ],
      settings: {
        username: this.$store.state.username,
        email: this.$store.state.email
      },
      signOut() {
        // Simulate logout
        alert("You have been logged out.");
        this.$router.push('/home');
      },
    };
  },
  methods: {
    ...mapActions(['updateUserInfo']), // Assuming you have an action to update user info

    async updateSettings() {
      try {
        const updatedData = {
          username: this.updatedUsername,
          email: this.updatedEmail
        };

        const response = await axios.put('http://localhost:8000/api/auth/user/', updatedData, {
          headers: {
            'Authorization': `Bearer ${this.$store.state.token}` // Pass the token for authentication
          }
        });

        // Update Vuex store with new data
        this.$store.commit('setUserInfo', response.data);

        alert('Settings updated!');
      } catch (error) {
        alert('Failed to update settings.');
      }
    },
    setActivePage(page) {
      this.activePage = page;
    },

   
  }
};
</script>

<style scoped>
.save-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #5a8f8f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.save-button:hover {
  background-color: #4b7b7b;
  transform: translateY(-2px);
}

.dashboard {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #667166;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.categories-button {
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #5a8f8f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.categories-button:hover {
  background-color: #4b7b7b;
  transform: translateY(-2px);
}

.categories-button:active {
  background-color: #3d6464;
  transform: translateY(0);
}

.sidebar .logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  padding: 10px 0;
  cursor: pointer;
}

.sidebar ul li:hover {
  background-color: #34495e;
  padding-left: 10px;
  transition: padding-left 0.3s ease;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ecf0f1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.search-bar {
  width: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.user-profile {
  display: flex;
  align-items: center;
}

.user-profile img {
  border-radius: 50%;
  margin-right: 10px;
}

.content {
  flex: 1;
  padding: 20px;
}

.footer {
  padding: 10px 20px;
  background-color: #34495e;
  color: white;
  text-align: center;
}
</style>

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
          <p>help developers enhance their skills through articles</p>
          <p>serve educational resource for developers </p>
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
          <form @submit.prevent="saveCategory" class="categories-container ">
            <label for="category">Choose a category:</label>
            <select v-model="selectedCategory" @change="loadSubcategories">
              <option v-for="category in categories" :key="category.name" :value="category.name">
                {{ category.name }}
              </option>
            </select>

            <div v-if="subcategories.length">
              <label for="subcategory">Choose a subcategory:</label>
              <select v-model="selectedSubcategory">
                <option v-for="subcategory in subcategories" :key="subcategory" :value="subcategory">
                  {{ subcategory }}
                </option>
              </select>
            </div>
            <button type="submit" class="save-button">Save Category</button>
          </form>
        </div>

        <div v-if="activePage === 'users'">
          <h2>Users</h2>
          <p>Manage your users here...</p>
        </div>

        <div v-if="activePage === 'settings'">
          <h2>Settings</h2>
          <p>Update Your Email</p>
          <form @submit.prevent="updateSettings" class="settings-container">
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
    </div>
  

  <div class="footer">
    <p>&copy; 2024 DevPedia. All rights reserved.</p>
  </div></div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  computed: {
    username() {
      return this.$store.state.username;
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
      categories: [
        {
          name: "Frontend Development",
          subcategories: ["Vue.js", "React", "Angular", "Svelte"]
        },
        {
          name: "Backend Development",
          subcategories: ["Django", "Node.js", "Ruby on Rails", "Flask"]
        },
        {
          name: "DevOps",
          subcategories: ["Docker", "Kubernetes", "CI/CD", "AWS"]
        }
        // Add more categories as needed
      ],
      subcategories: [],
      selectedCategory: "",
      selectedSubcategory: "",
      settings: {
        username: this.$store.state.username,
        email: this.$store.state.email
      }
    };
  },
  methods: {
    ...mapActions(['updateUserInfo']),

    async updateSettings() {
      try {
        const updatedData = {
          username: this.settings.username,
          email: this.settings.email
        };

        const response = await axios.put('http://localhost:8000/api/auth/user/', updatedData, {
          headers: { 'Authorization': `Bearer ${this.$store.state.token}` }
        });

        this.$store.commit('setUserInfo', response.data);
        alert('Settings updated!');
      } catch (error) {
        alert('Failed to update settings.');
      }
    },

    loadSubcategories() {
      const category = this.categories.find(cat => cat.name === this.selectedCategory);
      this.subcategories = category ? category.subcategories : [];
      this.selectedSubcategory = "";
    },

    async saveCategory() {
      try {
        alert(`Category "${this.selectedCategory}" and Subcategory "${this.selectedSubcategory}" saved!`);
      } catch (error) {
        alert('Failed to save category.');
      }
    },

    setActivePage(page) {
      this.activePage = page;
    },

    signOut() {
      alert("You have been logged out.");
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
.categories-container {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e4e8;
  font-family: 'Arial', sans-serif;
}

.categories-container h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.categories-container label {
  display: block;
  font-weight: bold;
  color: #34495e;
  margin-bottom: 10px;
}

.categories-container select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #dce1e5;
  border-radius: 5px;
  font-size: 16px;
  color: #2c3e50;
  background-color: #f9f9f9;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease;
}

.categories-container select:focus {
  outline: none;
  border-color: #5dade2;
}

.categories-container .save-button {
  width: 100%;
  height: 45px;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.categories-container .save-button:hover {
  background-color: #229954;
}

@media (max-width: 768px) {
  .categories-container {
    padding: 15px;
  }
}
/* Save Button Styles */
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

/* Dashboard Layout */
.dashboard {
  display: flex;
  height: 100vh;
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  background-color: #667166;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
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

/* Main Content Styles */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Article Styles */
.article {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

/* Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ecf0f1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Search Bar Styles */
.search-bar {
  width: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* User Profile Styles */
.user-profile {
  display: flex;
  align-items: center;
}

.user-profile img {
  border-radius: 50%;
  margin-right: 10px;
}

/* Footer Styles */
.footer {
  padding: 10px 20px;
  background-color: #34495e;
  color: white;
  text-align: center;
}

/* Settings Container Styles */
.settings-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px 40px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e4e8;
  font-family: 'Arial', sans-serif;
}

.settings-container h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  font-size: 26px;
}

.settings-container p {
  color: #7f8c8d;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
}

.settings-container form {
  display: flex;
  flex-direction: column;
}

.settings-container label {
  font-weight: bold;
  color: #34495e;
  margin-bottom: 10px;
}

.settings-container input[type="text"],
.settings-container input[type="email"] {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #dce1e5;
  border-radius: 5px;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.05);
  font-size: 16px;
  color: #2c3e50;
  background-color: #f9f9f9;
}

.settings-container input[type="text"]:focus,
.settings-container input[type="email"]:focus {
  outline: none;
  border-color: #5dade2;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
}

.settings-container .save-button {
  width: 100%;
  height: 45px;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.settings-container .save-button:hover {
  background-color: #229954;
}

@media (max-width: 768px) {
  .settings-container {
    padding: 20px;
    margin: 20vh auto;
  }
}
</style>


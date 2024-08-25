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
          <div v-for="(article, index) in articles" :key="index" class="article">
            <h3>{{ article.title }}</h3>
            <p>{{ article.content }}</p>
          </div>        </div>

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
          <p>Manage your settings here...</p>
        </div>
      </div>

      <div class="footer">
        <p>&copy; 2024 DevPedia. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
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
      ]// Default page
    };
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    },

    signOut() {
      // Simulate logout
      alert("You have been logged out.");
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
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

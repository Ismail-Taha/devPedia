<template>
  <div class="hello">
    <img src='@/assets/logo-vue.png'>
    <h1>Vue is a JavaScript Framework</h1>
    <p>
      Vue is a front-end JavaScript framework written in JavaScript.

Similar frameworks to Vue are React and Angular, but Vue is more lightweight and easier to start with.

Vue is distributed as a JavaScript file, and can be added to a web page <br><br>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Setup Vue</a>.
    </p>
    <h3>JavaScript compilers</h3>
    <ul>
      <li><a href="https://babeljs.io/docs/" target="_blank" rel="noopener">Babel</a></li>
      <li><a href="https://eslint.org/docs/latest/" target="_blank" rel="noopener">Eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystems</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VueDemo',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: #396F6A;
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p{font-family: 'Comic Sans MS', cursive, sans-serif; /* Casual font */
  color: #555; /* Softer text color */
  line-height: 1.6; /* Improve readability */
  font-size: 1.1em; /* Slightly larger text */
  background-color: #f9f9f9; /* Light background for emphasis */
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for a lifted look */
}
a {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  color: #42b983;
}
a:hover {
  background-color: #4e8f88;
  padding: 8px 10px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
}

img {
  width: 250px;
  text-decoration: underline;
}

</style>

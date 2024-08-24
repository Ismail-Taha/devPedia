<template>
    <div class="hello">
      <img src='@/assets/q.png'>
      <h1>Django Quiz</h1>
      <p>
        Vue is a front-end JavaScript framework written in JavaScript.
  
  Similar frameworks to Vue are React and Angular, but Vue is more lightweight and easier to start with.
  
  Vue is distributed as a JavaScript file, and can be added to a web page <br><br>
        <a href="https://www.w3schools.com/django/django_quiz.php" target="_blank" rel="noopener">w3schools Django Quiz</a>.
      </p>
      <h3>GeeksforGeeks Django Quiz</h3>
      <p>GeeksforGeeks provides a series of quizzes on Django, ranging from beginner to advanced levels.</p>
      <ul>
        <li><a href="https://www.geeksforgeeks.org/quizzes/django-quiz/" target="_blank" rel="noopener">Beginner Level</a></li>
        <li><a href="https://eslint.org/docs/latest/" target="_blank" rel="noopener">Advanced Level</a></li>
      </ul>
      <h3> Tutorialspoint</h3>
      <p>Tutorialspoint offers tests on Django that can help you test your understanding of the framework.</p>
      <ul>
        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
      </ul>
      <h3>ProProfs Django Quiz</h3>
      <ul>
        <li><a href="https://www.proprofs.com/quiz-school/story.php?title=3dq-django-software-trivia-quiz" target="_blank" rel="noopener">coding challenges</a></li>
        <li><a href="https://codesignal.com/" target="_blank" rel="noopener">Django quizzes</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Django courses</a></li>
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
    margin-top: 2%;
    text-decoration: underline;
  }
  
  </style>
  
<template>
    <div class="hello">
      <img src='@/assets/q.png'>
      <h1>Django Quiz</h1>
      <p>These links provide a series of quizzes on Django, ranging from beginner to advanced levels<br><br>
        <a href="https://www.w3schools.com/django/django_quiz.php" target="_blank" rel="noopener">w3schools Django Quiz</a>.
      </p>
      <h3>GeeksforGeeks Django Quiz</h3>
    
      <ul>
        <li><a href="https://www.geeksforgeeks.org/quizzes/django-quiz/" target="_blank" rel="noopener">Beginner Level</a></li>
        <li><a href="https://www.geeksforgeeks.org/quiz-application-using-django/" target="_blank" rel="noopener">Advanced Level</a></li>
      </ul>
      <h1>Vue Quiz</h1>
      <p>We offer tests on Vue that can help you test your understanding of the framework.</p>
      <ul>
        <li><a href="https://www.w3schools.com/vue/vue_quiz.php" target="_blank" rel="noopener">W3school Vue </a></li>
        <li><a href="https://vuejs.org/about/community-guide" target="_blank" rel="noopener">Community Guide</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://v2.vuejs.org/v2/guide/join" target="_blank" rel="noopener">Courses</a></li>
      </ul>
      <h3>ProProfs Quiz</h3>
      <ul>
        <li><a href="https://www.proprofs.com/quiz-school/story.php?title=3dq-django-software-trivia-quiz" target="_blank" rel="noopener">coding challenges</a></li>
        <li><a href="https://codesignal.com/" target="_blank" rel="noopener">Vue quizzes</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Vue projects</a></li>
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
  
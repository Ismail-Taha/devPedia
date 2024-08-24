<template>
  <div class="hello">
    <img src='@/assets/dj.png' style="width: 250px"  />
    <p>Django is a Python framework that makes it easier to create web sites using Python. <br>

      Django takes care of the difficult stuff so that you can concentrate on building your web applications.</p>
    <br />
    <p>Subject</p>
    <input type="text" placeholder="Your Name" v-model="subject">
    <p>Message</p>
    <input type="text" placeholder="share your knowledge here" v-model="msgBody">
    <br><br>
    <input type="submit" value="Add" @click="addMessage({ subject: subject, body: msgBody })"
      :disabled="!subject || !msgBody">

    <hr/>
    <h3>Post your issue here !</h3>
    <p v-if="messages.length === 0">No Messages Yet</p>
    <div class="msg" v-for="(msg, index) in messages" :key="index">
      <p class="msg-index">[{{ index }}]</p>
      <p class="msg-subject" v-html="msg.subject"></p>
      <p class="msg-body" v-html="msg.body"></p>

      <div v-if="msg.showAnswerInput">
        <textarea v-model="msg.newComment" placeholder="Write your answer here"></textarea>
        <input type="submit" value="Submit" @click="submitAnswer(msg, index)" :disabled="!msg.newComment" />
      </div>

      <input type="submit" class="del" @click="deleteMessage(msg.pk)" value="Delete" />
      <input type="submit" @click="toggleAnswerInput(msg)" value="Answer" />

      <div class="comments" v-if="msg.comments && msg.comments.length">
        <p v-for="(comment, commentIndex) in msg.comments" :key="commentIndex">{{ comment }}</p>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Messages",
  data() {
    return {
      subject: "",
      msgBody: "",
    };
  },
  computed: mapState({
    messages: state => state.messages.messages
  }),
  methods: {
    ...mapActions('messages', [
      'addMessage',
      'deleteMessage'
    ]),
    toggleAnswerInput(msg) {
      // Toggle the visibility of the answer input field
      this.$set(msg, 'showAnswerInput', !msg.showAnswerInput);
      if (!msg.showAnswerInput) {
        msg.newComment = ""; // Reset the comment field when hiding the input
      }
    },
    submitAnswer(msg, index) {
      // Add the new comment to the message
      if (!msg.comments) {
        this.$set(msg, 'comments', []);
      }
      msg.comments.push(msg.newComment);
      msg.newComment = ""; // Clear the input field
      msg.showAnswerInput = false; // Hide the input field after submission
    }
  },
  created() {
    this.$store.dispatch('messages/getMessages')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  /* Casual font */
  color: #003A2B;
  /* Softer text color */
  line-height: 1.6s;
  margin-top: 1%;
  /* Improve readability */
  font-size: 1.1em;
  /* Slightly larger text */
  background-color: #f9f9f9;
  /* Light background for emphasis */
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input[type="text"] {
  width: 30%;
  padding: 7px;
  margin: 5px 0 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #aaa5a5;
  font-size: 1em;
  background-color: #f9f9f9;
  transition: border-color 0.3s, box-shadow 0.3s;
}

hr {
  max-width: 65%;
}

.msg {
  margin: 0 auto;
  max-width: 30%;
  text-align: left;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}

.msg-index {
  color: #ccc;
  font-size: 0.8rem;
  /* margin-bottom: 0; */
}



img {
  width: 250px;
  padding-top: 50px;
  padding-bottom: 50px;
}


input[type="text"]:focus {
  border-color: #42b983;
  box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
  outline: none;
}

input[type="submit"] {
  background-color: #003A2B;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
  margin-right: 10px;
} 
input[type="submit"].del {
  margin-right: 20px; /* Additional space specifically for the delete button */
}

.answer-input {
  margin-top: 10px;
}

textarea {
  width: 100%;
  height: 60px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
}

input[type="submit"]:hover {
  background-color: #35495e;
}
</style>
<template>
  <div id="app">
    <h1>Conversation Message App</h1>
    <conversations v-if="loaded" :messages="messages" :current-user="currentUser" />
    <composer v-model="message" @submit="sendReply" />
  </div>
</template>

<script>
import Conversations from "./components/Conversations.vue";
import Composer from "./components/Composer.vue";
import {mapActions, mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    Conversations,
    Composer
  },
  data () {
    return {
      loaded: false,
      message: ''
    }
  },
  async mounted () {
    await Promise.all([this.getCurrentUser(), this.getAllMessages()])
    this.loaded = true
  },
  computed: {
    ...mapState('conversation', ['messages']),
    ...mapState('me', ['currentUser']),
  },
  methods: {
    ...mapActions('conversation', ['getAllMessages', 'sendMessage']),
    ...mapActions('me', ['getCurrentUser']),
    sendReply (msg) {
      console.log('msg', msg)
      this.sendMessage(msg)
      this.message = ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 500px;
  margin: 20px auto;
  overflow: hidden;
}
</style>

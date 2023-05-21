<template>
  <ul id="messages" class="message-list">
      <message
        v-for="message in messages"
        :key="message.id"
        :own="message.from.firstName === currentUser.firstName"
        :message-text="message">
      </message>
    </ul>
</template>
  
<script>
import Message from './Message.vue'
export default {
  name: 'Conversations',
  components: {
    Message
  },
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    currentUser: {
      type: Object,
      default: () => {}
    }
  },
  updated () {
    // whenever data changes and the component re-renders, this is called.
    this.$nextTick(() => this.scrollToEnd())
  },
  methods: {
    scrollToEnd () {
      this.$el.scrollTop = this.$el.lastElementChild.offsetTop
    }
  }
}
</script>
<style scoped>
.message-list {
  border: 1px solid black;
  font-size: 16px;
  height: 400px;
  margin: 0;
  overflow-y: auto;
  padding: 0;
}  
</style>
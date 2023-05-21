<template>
  <div class="message-composer">
    <textarea style="width: 100%;"
      v-model="text"
      rows="3"
      @keyup.enter="send">
    </textarea>
    <button @click="send" class="send-btn">Send</button>
  </div>
</template>
  
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Composer',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      text: this.message
    }
  },
  model: {
    prop: 'message',
    event: 'submit'
  },
  methods: {
    send () {
      this.$emit('submit', this.text)
      this.text = ''
    }
  },
}
</script>
<style scoped>
.message-composer {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
}
.send-btn {
  width: 60px;
  margin-left: 12px;
}
</style>
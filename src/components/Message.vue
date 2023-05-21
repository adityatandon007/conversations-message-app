<template>
  <li :class="[own? 'message-list-item m-left' : 'message-list-item m-right']">
    <span class="thumbnail"></span>
    <div :class="[own ? 'message-bubble message-left': 'message-bubble message-right']">{{ messageText.message }}</div>
  </li>
</template>
  
<script>
export default {
  name: 'Message',
  props: {
    messageText: {
      type: Object,
      default: () => {}
    },
    own: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.message-list-item {
  list-style: none;
  padding: 12px 14px 14px;
  display: flex;
  align-items: flex-end;
}
.m-left{
  flex-direction: row;
}
.m-right{
  flex-direction: row-reverse;
}
.thumbnail {
 width: 48px;
 height: 48px;
 background-color: black;
 border-radius: 50%;
}
.message-bubble {
  border-radius: 8px;
  padding: 8px;
  max-width: 60%
}
.message-left {
  margin-left: 12px;
  background-color: grey;
}
.message-right {
  margin-right: 12px;
  background-color: skyblue;
}
</style>
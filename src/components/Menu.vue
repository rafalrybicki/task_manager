<template>
   <nav class="h100">
      <ul>
         
      </ul>
   </nav>
</template>

<script>
export default {
   data() {
      return {
         items: [
            {to: '/asap', title: 'ASAP', icon: '?'},
            {to: '/inbox', title: 'Inbox', icon: '?'},
            {to: '/today', title: 'Today', icon: '?'},
            {to: '/upcoming', title: 'Upcoming', icon: '?'},
         ]
      }
   }
}
</script>

<style scoped>
   nav {
      background-color: #FAFAFA;
      width: 260px;
      padding: 12px;
   }
</style>
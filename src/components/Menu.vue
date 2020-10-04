<template>
   <nav class="h100">
      <ul>
         <MenuItem v-for="item in items" :itemData="item" :key="item.to" />
      </ul>
   </nav>
</template>

<script>
import MenuItem from './MenuItem';

export default {
   components: {
      MenuItem
   },
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
      padding: 0 12px 12px;
   }

   ul {
      padding-top: 43px;
   }
</style>
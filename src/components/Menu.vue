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
            {to: '/inbox', title: 'Inbox', icon: 'inbox'},
            {to: '/important', title: 'Important', icon: 'star'},
            {to: '/today', title: 'Today', icon: 'calendar'},
            {to: '/upcoming', title: 'Upcoming', icon: 'calendar-alt'},
            {to: '/done', title: 'Done', icon: 'check'},
         ]
      }
   }
}
</script>

<style scoped>
   nav {
      background-color: #FAFAFA;
      width: 0;
      overflow: hidden;
      transition: all 0.2s;
   }

   nav.show {
      width: 260px;
   }

   ul {
      padding: 43px 12px 0;
   }
</style>
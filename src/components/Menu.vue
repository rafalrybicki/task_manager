<template>
   <header class="relative">
      <nav class="h100">
         <ul>
            <MenuItem v-for="item in items" :itemData="item" :key="item.to" />
         </ul>
         <MenuToolbar />
      </nav>
   </header>
</template>

<script>
import MenuItem from './MenuItem';
import MenuToolbar from './MenuToolbar';

export default {
   components: {
      MenuItem,
      MenuToolbar
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
   header {
      background-color: #FAFAFA;
      padding-bottom: 25px;
      width: 0;
      overflow: hidden;
      transition: all 0.2s;
   }

   header.show {
      width: 260px;
   }
   
   nav {
      padding: 12px;
   }
</style>
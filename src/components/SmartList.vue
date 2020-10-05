<template>
   <ul>
      <SmartListItem v-for="item in items" :itemData="item" :key="item.to" />
   </ul>
</template>

<script>
import SmartListItem from './SmartListItem';
export default {
   components: {
      SmartListItem,
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
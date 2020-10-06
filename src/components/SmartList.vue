<template>
   <ul>
      <SmartListItem v-for="list in smartLists" :itemData="list" :key="list.path" />
   </ul>
</template>

<script>
import SmartListItem from './SmartListItem';
export default {
   components: {
      SmartListItem,
   },
   computed: {
      smartLists() {
         return this.$store.state.smartLists
      }
   }
}
</script>
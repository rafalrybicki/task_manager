<template>
   <div class="flex absolute w100">
      <IconButton 
         iconName="list" 
         @click.native="newList" 
      />
      <IconButton 
         iconName="folder" 
         @click.native="newFolder" 
      />
   </div>
</template>

<script>
import IconButton from './IconButton'
export default {
   components: {
      IconButton
   },
   methods: {
      newList() {
         console.log('new list')
      },
      newFolder() {
         this.$store.commit('toggleNewFolder')
      }
   }
}
</script>

<style scoped>
   div {
      bottom: 10px;
   }

   div button {
      color: grey;
   }

   div button:hover {
      background-color: lightgrey
   }
</style>
<template>
   <header class="absolute h100 flex">
      <nav class="menu w100">
         <MenuList class="smart-list">
            <MenuListItem 
               v-for="smartList in smartLists" 
               :key="smartList.name" 
               :to="smartList.path"
               :name="smartList.name"
               :icon="smartList.icon"
               :color="smartList.color"
               :overdueTasks="1"
               :totalTasks="8"
            />
         </MenuList>
         <MenuFolder 
            v-for="(folder, index) in folders"
            :key="folder.name + index" 
            :projects="folder.projects"
            :name="folder.name"
         />
         <MenuToolbar />
      </nav>
   </header>
</template>

<script>
import MenuList from './MenuList';
import MenuListItem from './MenuListItem';
import MenuFolder from './MenuFolder';
import MenuToolbar from './MenuToolbar';

export default {
   components: {
      MenuList,
      MenuListItem,
      MenuFolder,
      MenuToolbar
   },
   computed: {
      folders() {
         return this.$store.state.projectsFolders
      },
      smartLists() {
         return this.$store.state.smartLists
      }
   }
}
</script>

<style scoped>
   header {
      z-index: 100;
      background-color: #FAFAFA;
      width: 0;
      overflow: hidden;
      transition: all 0.2s;
      box-shadow: 1px 0px 4px rgba(0,0,0,.2);
      padding-top: 33px;
      font-size: 14px;
   }

   header.show {
      width: 280px;
   }
</style>
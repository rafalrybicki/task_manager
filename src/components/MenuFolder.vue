<template>
   <div class="menu-folder" :class="{open: isOpen}" ref="menuFolder">
      <MenuFolderHeader 
         :name="name"
         :open="isOpen"
         @toggle-list="toggleList"
         @keydown.native.enter="toggleList"
         :folderId="id"
      />
      <MenuList v-if="isOpen">
         <MenuListItem
            class="project-list"
            v-for="project in projects" 
            :key="project.name" 
            :to="project.path"
            :name="project.name"
            :icon="project.icon"
            :color="project.color"
            :overdueTasks="2"
            :totalTasks="4"
         />
      </MenuList>
   </div>
</template>

<script>
import MenuFolderHeader from './MenuFolderHeader';
import MenuList from './MenuList';
import MenuListItem from './MenuListItem';

export default {
   props: {
      name: {
         type: String,
         required: true
      },
      id: {
         type: Number,
         required: true
      },
      projects: {
         type: Array,
         required: true
      }
   },
   components: {
      MenuFolderHeader,
      MenuList,
      MenuListItem
   },
   data() {
      return {
         isOpen: false
      }
   },
   methods: {
      toggleList() {
         this.isOpen = !this.isOpen
      }
   }
}
</script>

<style scoped>
   .menu-folder {
      background-color: white;
      margin-bottom: 20px;
      overflow: hidden;
      transition: all 0.25s;
    
      height: auto;
      margin-top: 20px;
   }
</style>

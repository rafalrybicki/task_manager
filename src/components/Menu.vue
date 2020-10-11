<template>
   <header 
      class="header absolute h100 flex"
      :class="{show}"
   >
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
            :key="folder.name + '_' + index" 
            :projects="folder.projects"
            :name="folder.name"
         />
         <MenuToolbar @click.native="close" />
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
      MenuToolbar,
   },
   computed: {
      show() {
			return this.$store.state.menu
		},
      folders() {
         return this.$store.state.projectsFolders
      },
      smartLists() {
         return this.$store.state.smartLists
      }
   },
   methods: {
      close() {
         console.log('close')
      }
   }
}
</script>

<style scoped>
   .header {
      z-index: 101;
      width: 0;
      overflow: hidden;
      transition: all 0.2s;
      box-shadow: 1px 0px 4px rgba(0,0,0,.2);
      font-size: 14px;
   }

   .header.show {
      width: auto;
   }

   .header .menu {
      padding-top: 33px;
      background-color: #FAFAFA;
   }

   .header.show .menu {
      width: 280px;
      z-index: 100;
   }

   @media only screen and (max-width: 768px) {
      .header.show {
         width: 100%;
      }
   }
</style>
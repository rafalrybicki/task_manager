<template>
   <header class="absolute h100 w100 flex">
      <nav class="menu">
         <SmartList />
         <br>
         <ProjectList />
         <MenuToolbar />
      </nav>
   </header>
</template>

<script>
import SmartList from './SmartList';
import ProjectList from './ProjectList';
import MenuToolbar from './MenuToolbar';

export default {
   components: {
      SmartList,
      ProjectList,
      MenuToolbar
   }
}
</script>

<style scoped>
   header {
      z-index: 10;
      background-color: white;
      width: 0;
      overflow: hidden;
      transition: all 0.2s;
   }

   header.show {
      width: 100vw;
   }

   .menu {
      width: 280px;
      z-index: 10;
   }
</style>
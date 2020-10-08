<template>
   <header class="absolute h100 flex">
      <nav class="menu w100">
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
      padding-top: 30px;
      z-index: 100;
      background-color: white;
      width: 0;
      overflow: hidden;
      transition: all 0.2s;
   }

   header.show {
      width: 280px;
   }
</style>
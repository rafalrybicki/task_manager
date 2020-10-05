<template>
   <header class="relative">
      <nav class="h100">
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
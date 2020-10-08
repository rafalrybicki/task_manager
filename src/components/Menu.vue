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
      z-index: 100;
      background-color: #FAFAFA;
      width: 0;
      overflow: hidden;
      transition: all 0.2s;
      box-shadow: 1px 0px 4px rgba(0,0,0,.2);
      padding-top: 33px;
   }

   header.show {
      width: 280px;
   }
</style>
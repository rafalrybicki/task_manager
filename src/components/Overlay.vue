<template>
   <div 
      class="overlay absolute" 
      :style="{zIndex: zIndex}"
   />
</template>

<script>
export default {
   computed: {
      zIndex() {
         // return (window.innerWidth < 769 && this.$store.state.menu ? 100 : 110)
         return -1
      }
   }
}
</script>

<style>
   .overlay {
      top: 0;
      left: 0;
      opacity: 0;
      background-color: black;
      transition: 0.2s all;
      width: 100vw;
      height: 100vh;
   }

   .overlay.show {
      opacity: 0.2;
   }
</style>
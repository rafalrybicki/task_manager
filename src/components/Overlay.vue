<template>
   <div class="overlay absolute" />
</template>

<style>
   .overlay {
      z-index: 10;
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
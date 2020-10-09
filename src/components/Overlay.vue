<template>
   <div class="overlay absolute h100 w100"></div>
</template>

<style>
   .overlay {
      z-index: 10;
      top: 0;
      left: 0;
      opacity: 0;
      background-color: black;
      transition: 0.2s all;
   }

   .overlay.show {
      opacity: 0.2;
   }
</style>
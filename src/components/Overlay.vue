<template>
   <div class="overlay absolute h100 w100"></div>
</template>

<style>
   .overlay {
      top: 0;
      left: 0;
      opacity: 0;
      background-color: rgb(33, 33, 33);
      transition: 0.2s all;
   }

   .overlay.show {
      opacity: 0.46;
   }

   @media only screen and (min-width: 767px) {
      .overlay {
         display: none;
      }
   }
</style>
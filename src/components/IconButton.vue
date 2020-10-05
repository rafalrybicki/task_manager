<template>
  <button class="radius">
     <font-awesome-icon :icon="iconName" ></font-awesome-icon>
  </button>
</template>

<script>
export default {
   props: {
      iconName: {
         type: String,
         required: true
      }
   }
}
</script>

<style scoped>
   button {
      height: 33px;
      width: 33px;
      z-index: 10;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: inherit;
      transition: all 0.1s;
   }

   button:hover {
      background-color: white;
   }
</style>
<template>
   <li class="radius">
      {{itemData.title}}
   </li>
</template>

<script>
export default {
   props: {
      itemData: {
         type: Object,
         required: true
      }
   }
}
</script>

<style scoped>
   li {
      height: 34px;
   }
</style>
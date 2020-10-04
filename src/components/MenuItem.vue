<template>
   <li>
      <router-link 
         :to="itemData.to" 
         class="flex radius"
      >{{itemData.title}}</router-link>
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
   a {
      height: 34px;
      transition: all 0.1s;
      margin-bottom: 5px;
   }

    a:hover, .router-link-exact-active {
      background-color: white;
   }
</style>
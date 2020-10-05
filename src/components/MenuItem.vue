<template>
   <li>
      <router-link 
         :to="itemData.to" 
         class="flex radius"
      >
         <font-awesome-icon :icon="itemData.icon"></font-awesome-icon>
         {{itemData.title}}
      </router-link>
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
      margin-bottom: 2px;
      padding-top: 8px;
   }

    a:hover, .router-link-exact-active {
      background-color: lightgray;
   }

   svg {
      margin: 0 10px;
      margin-top: 1px;
   }
</style>
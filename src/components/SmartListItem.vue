<template>
   <li>
      <router-link 
         :to="itemData.path" 
         class="sm-item flex"
      >
         <font-awesome-icon :color="itemData.color || 'black'" :icon="itemData.icon"></font-awesome-icon>
         <span class="name">{{itemData.name}}</span>
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
   .sm-item {
      height: 34px;
      transition: all 0.1s;
      padding: 0 14px;
      border-bottom: 1px solid #E5E5E6;
      align-items: center;
   }

   .sm-item svg {
      width: 18px;
      height: 18px;
      margin-right: 12px;
   }

   .sm-item .name {
      margin-top: 1px;
      flex-grow: 1;
   }

   .sm-item:hover {
      background-color: #F7F7F7;
   }

   .router-link-exact-active .name {
      color: blue;
   }
</style>
<template>
   <li>
      <router-link 
         :to="itemData.path" 
         class="sm-item flex"
      >
         <font-awesome-icon :color="itemData.color || 'black'" :icon="itemData.icon"></font-awesome-icon>
         <span class="name">{{itemData.name}}</span>
         <span class="overdue">2</span>
         <span class="tasks">4</span>
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
      transition: background 0.2s;
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
      font-weight: 500;
   }

   .tasks {
      font-size: 12px;
      margin-left: 5px;
   }

   .overdue {
      font-size: 12px;
      border-radius: 50%;
      background-color: #FCEBEA;
      min-height: 20px;
      min-width: 20px;
      text-align: center;
      padding-top: 3px;
      color: red;
   }

   
</style>
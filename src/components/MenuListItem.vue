<template>
   <li>
      <router-link :to="to" class="menu-list-item flex">
         <div class="icon">
            <font-awesome-icon 
               :color="color" 
               :icon="icon"
            />
         </div>
         <span class="name">{{ name }}</span>
         <span class="overdue-tasks" v-if="overdueTasks">{{ overdueTasks }}</span>
         <span class="total-tasks" v-if="totalTasks">{{ totalTasks }}</span>
      </router-link>
   </li>
</template>

<script>
export default {
   props: {
      to: {
         type: String,
         required: true
      },
      name: {
         type: String,
         required: true
      },
      totalTasks: {
         type: Number,
         default: 0
      },
      overdueTasks: {
         type: Number,
         default: 0
      },
      color: {
         type: String,
         default: 'black'
      },
      icon: {
         type: String,
         required: true
      }
   }
}
</script>

<style>
   .menu-list-item {
      height: 37px;
      transition: background 0.2s;
      padding: 0 14px;
      border-bottom: 1px solid #E5E5E6;
      align-items: center;
   }

   .menu-list-item:hover {
      background-color: #F7F7F7;
   }

   .router-link-exact-active .name {
      color: blue;
   }

   .menu-list-item .name {
      flex-grow: 1;
   }
   
   .menu-list-item .icon {
      width: 17px;
      height: 17px;
      margin-right: 12px;
      text-align: center;
   }

   .menu-list-item .icon svg {
      width: 100% !important;
      height: 100% !important;
   }

   .menu-list-item .overdue-tasks {
      font-size: 12px;
      border-radius: 50%;
      background-color: #FCEBEA;
      min-height: 20px;
      min-width: 20px;
      text-align: center;
      padding-top: 3px;
      color: red;
   }

   .menu-list-item .total-tasks {
      font-size: 12px;
      margin-left: 5px;
   }
</style>
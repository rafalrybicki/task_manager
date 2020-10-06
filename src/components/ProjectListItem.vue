<template>
   <li>
      <router-link 
         :to="project.path" 
         class="flex radius"
      >
         <span class="color" :style="{backgroundColor: project.color}"></span>
         {{project.name}}
      </router-link>
   </li>
</template>

<script>
export default {
   props: {
      project: {
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

   .color {
      margin: 3px 10px 0 13px;
      height: 12px;
      width: 12px;
      border-radius: 50%;
   }
</style>
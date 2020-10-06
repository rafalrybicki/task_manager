<template>
   <div @click="open = !open">
      <font-awesome-icon :icon="open ? 'folder-open' : 'folder'"></font-awesome-icon>
      <span>{{ name }}</span>
      <ul v-show="open">
         <ProjectListItem v-for="project in projects" :project="project" :key="project.path" />
      </ul>
      <br>
   </div>
</template>

<script>
import ProjectListItem from './ProjectListItem';
export default {
   props: {
      name: {
         title: String,
         required: true
      },
      projects: {
         type: Array,
         required: true
      }
   },
   data() {
      return {
         open: false
      }
   },
   components: {
      ProjectListItem,
   }
}
</script>

<style scoped>
   div {
      min-height: 34px;
      margin-bottom: 2px;
   }
</style>

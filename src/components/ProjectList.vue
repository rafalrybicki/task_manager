<template>
   <div>
      <ProjectListGroup v-for="projectGroup in groupedProjects" :key="projectGroup.name" :name="projectGroup.name" :projects="projectGroup.projects" />
      <ul>
         <ProjectListItem v-for="project in ungroupedProjects" :project="project" :key="project.path" />
      </ul>    
   </div>
</template>

<script>
import ProjectListGroup from './ProjectListGroup'
import ProjectListItem from './ProjectListItem';
export default {
   components: {
      ProjectListGroup,
      ProjectListItem
   },
   computed: {
      groupedProjects() {
         return this.$store.state.projects.grouped
      },
      ungroupedProjects() {
         return this.$store.state.projects.ungrouped
      }
   }
}
</script>
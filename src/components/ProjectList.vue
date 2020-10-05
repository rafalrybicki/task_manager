<template>
   <div>
      <ProjectListGroup v-for="projectGroup in projectGroups" :key="projectGroup.name" :name="projectGroup.name" :projects="projectGroup.projects" />
      <ul>
         <ProjectListItem v-for="project in projects" :itemData="project" :key="project.to" />
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
   data() {
      return {
         projectGroups: [
            {
               name: 'Group1',
               projects: [
                  {
                     title: 'Group1TestProject',
                     color: 'royalblue',
                     to: '/test'
                  },
                  {
                     title: 'Group1TestProject2',
                     color: 'red',
                     to: '/test2'
                  },
                  {
                     title: 'Group1TestProject3',
                     color: 'green',
                     to: '/test3'
                  },
               ]
            },
            {
               name: 'Group2',
               projects: [
                  {
                     title: 'Group2TestProject',
                     color: 'royalblue',
                     to: '/test'
                  },
                  {
                     title: 'Group2TestProject2',
                     color: 'red',
                     to: '/test2'
                  },
                  {
                     title: 'Group2TestProject3',
                     color: 'green',
                     to: '/test3'
                  },
               ]
            }
         ],
         projects: [
            {
               title: 'TestProject1',
               color: 'royalblue',
               to: '/test'
            },
            {
               title: 'TestProject2',
               color: 'red',
               to: '/test2'
            },
            {
               title: 'TestProject3',
               color: 'green',
               to: '/test3'
            },
         ]
      }
   }
}
</script>
<template>
   <div 
      class="projects-list-header flex relative" 
      tabindex="0" 
      @click="$emit('toggle-list')"
   >
      <font-awesome-icon 
         :icon="open ? 'folder-open' : 'folder'" 
         class="folder-icon absolute"
         :class="{open: open}"
      />
      <span class="name">{{ name }}</span>
      <font-awesome-icon 
         icon="plus" 
         @click.stop="addNewProject" 
         class="action-icon"
      />
      <font-awesome-icon 
         icon="ellipsis-h" 
         @click.stop="addNewProject" 
         class="action-icon"
      />
   </div>
</template>

<script>
export default {
   props: {
      name: {
         type: String,
         required: true
      },
      open: {
         type: Boolean,
         required:true
      },
      folderId: {
         type: Number,
         required: true
      }
   },
   methods: {
      addNewProject() {
         this.$store.commit('toggleNewProject', this.folderId)
      }
   }
}
</script>

<style scoped>
   .projects-list-header {
      color: #424242;
      cursor: pointer;
      min-height: 37px;
      padding-left: 43px;
      padding-right: 5px;
      align-items: center;
      border-bottom: 1px solid #E5E5E6;
      text-transform: uppercase;
      font-weight: 500;
   }

   .projects-list-header .folder-icon {
      top: 9px;
      left: 14px;
      height: 18px;
      width: 18px;
   }

   .projects-list-header .folder-icon.open {
      height: 21.5px;
      width: 21.5px;
      top: 8px;
   }

   .projects-list-header .name {
      flex-grow: 1;
   }

   .projects-list-header .action-icon {
      height: 26px;
      width: 26px;
      padding: 7px;
      border-radius: 5px;
      opacity: 0;
      transition: all 0.1s;
   }

   .projects-list-header:hover .action-icon {
      opacity: 1;
   }

   .projects-list-header .action-icon:hover {
      background-color: #E5E5E6;
   }
</style>
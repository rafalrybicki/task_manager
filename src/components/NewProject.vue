<template>
   <form 
      @submit.prevent="addProject" 
      class="new-project card absolute"
      :class="{show}"
   >
      <p class="title">Add project</p>
      <label 
         for="projectName"
         class="project-name-label hide"
      >Folder Name</label>
      <input 
         type="text" 
         id="projectName"
         placeholder="Enter a name for your project"
         class="project-name-input"
         maxlength="30"
         v-model="projectName"
      >
      <font-awesome-icon 
         :icon="icon.value" 
         :color="color.value"
         class="icon block absolute"
      />
      <button 
         type="button"
         class="icon-btn absolute"
         @click="showPicker = true"
      >Set icon</button>
      <NewProjectIconPicker 
         @set-data="setData"
         @close-picker="showPicker = false"
         :initialColor="color.index"
         :initialIcon="icon.index"
         v-if="showPicker"
      />
      <button 
         type="button" 
         @click="close"
         class="btn btn-default"
      >Cancel</button>
      <button 
         type="submit" 
         class="btn"
         :disabled="disabled"
      >Save</button>
   </form>
</template>

<script>
import NewProjectIconPicker from './NewProjectIconPicker'

export default {
   components: {
      NewProjectIconPicker
   },
   data() {
      return {
         projectName: '',
         showPicker: false,
         color: {
            index: 0,
            value: "#000000"
         },
         icon: {
            index: 0,
            value: 'circle'
         }
      }
   },
   computed: {
      show() {
         return this.$store.state.folders.newProject
      },
      disabled() {
         return this.projectName.trim().length === 0
      }
   },
   methods: {
      setData(payload) {
         this.color = payload.color
         this.icon = payload.icon
         this.showPicker = false
      },
      addProject() {
         this.$store.commit('addProjectToFolder', {
            color: this.color.value,
            icon: this.icon.value,
            path: '/' + this.$route.name,
            id: Math.random(),
            name: this.projectName
         })
      },
      close() {
         this.$store.commit('toggleNewProject')
      }
   }
}
</script>

<style scoped>
   .new-project {
      z-index: 111;
      top: 100px;
      left: 50%;
      padding: 20px;
      width: 400px;
      background-color: white;
      transform: scale(0);
      transition: transform 0.2s;
      font-size: 14px;
   }

   .new-project.show {
      transform: scale(1);
   }

   .new-project .title {
      font-weight: 500;
   }

   .new-project .project-name-label {
      color: #777;
      font-weight: 500;
   }

   .new-project .project-name-input {
      background-color: #f9f9f9;
      border-radius: 5px;
      height: 37px;
      margin: 15px 0;
      padding-left: 7px;
      width: 66%;
   }

   .new-project .icon {
      top: 59px;
      right: 108px;
      height: 25px;
      width: 25px;
   }

   .new-project .icon-btn {
      top: 52px;
      right: 20px;
      height: 37px;
      width: 80px;
      padding: 6px;
      background-color: #f9f9f9;
      border-radius: 5px;
      font-weight: 500;
   }

   .new-project .btn {
      padding: 6px;
      border-radius: 5px;
      font-size: 14px;
      width: 48.5%;
      font-weight: 500;
   }

   .new-project .btn-default {
      background-color: #f9f9f9;
   }

   .new-project .btn:last-of-type {
      background-color: lightgreen;
      margin-left: 3%
   }
</style>
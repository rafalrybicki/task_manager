<template>
   <div class="new-project absolute w100 h100 flex">
      <form 
         @submit.prevent="addProject" 
         class="form radius"
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
            class="project-name-input w100"
            maxlength="30"
            v-model="projectName"
         >
         <NewProjectIconPicker 
            @set-icon="setIcon"
         />
         <button 
            type="button" 
            class="btn"
            @click="close"
         >Cancel</button>
         <button 
            type="submit" 
            class="btn"
         >Save</button>
      </form>
      <Overlay 
         :class="{show}"
         @click.native="close"
      />
   </div>
</template>

<script>
import Overlay from './Overlay'
import NewProjectIconPicker from './NewProjectIconPicker'

export default {
   components: {
      Overlay,
      NewProjectIconPicker
   },
   data() {
      return {
         projectName: '',
         color: "#000000",
         icon: 'circle'
      }
   },
   computed: {
      show() {
         return this.$store.state.newProject
      }
   },
   methods: {
      setIcon(icon) {
         console.log('emit')
         console.log(icon)
      },
      addProject() {
         console.log('project')
      },
      close() {
         console.log('close')
      }
   }
}
</script>

<style scoped>
   .new-project {
      top: 0;
      left: 0;
      z-index: 1000;
      justify-content: center;
      align-items: flex-start;
   }

   .form {
      margin-top: 100px;
      padding: 20px;
      width: 400px;
      background-color: white;
      transform: scale(0);
      transition: transform 0.2s;
      font-size: 14px;
      box-shadow: rgba(15,15,15,.05) 0px 0px 0px 1px, rgba(15,15,15,.1) 0px 5px 10px, rgba(15,15,15,.2) 0px 15px 40px;
   }

   .form.show {
      transform: scale(1);
   }

   .form .title {
      font-weight: 500;
   }

   .form .project-name-label {
      color: #777;
      font-weight: 500;
   }

   .form .project-name-input {
      background-color: #f9f9f9;
      border-radius: 5px;
      height: 37px;
      margin: 15px 0;
      padding-left: 7px;
   }

   .form .btn {
      padding: 6px;
      border-radius: 5px;
      font-size: 14px;
      width: 48.5%;
      font-weight: 500;
   }

   .form .btn:first-of-type {
      background-color: #f9f9f9;
   }

   .form .btn:last-of-type {
      background-color: lightgreen;
      margin-left: 3%
   }
</style>
<template>
   <div class="new-folder absolute w100 h100 flex">
      <form 
         @submit.prevent="addList" 
         class="form radius"
         :class="{show}"
      >
         <p class="title">Add folder</p>
         <label 
            for="listName"
            class="folder-name-label hide"
         >Folder Name</label>
         <input 
            type="text" 
            id="listName"
            placeholder="Enter a name for your folder"
            class="folder-name-input w100"
            maxlength="30"
            v-model="folderName"
         >
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

export default {
   components: {
      Overlay
   },
   data() {
      return {
         folderName: ''
      }
   },
   computed: {
      show() {
         return this.$store.state.newFolder
      }
   },
   methods: {
      addList() {
         console.log('folder')
      },
      close() {
         console.log('close')
      }
   }
}
</script>

<style scoped>
   .new-folder {
      top: 0;
      left: 0;
      z-index: 1000;
      justify-content: center;
   }

   .form {
      margin-top: 100px;
      padding: 20px;
      width: 400px;
      height: 156px;
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

   .form .folder-name-label {
      color: #777;
      font-weight: 500;
   }

   .form .folder-name-input {
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
      width: 48%;
   }

   .form .btn:first-of-type {
      background-color: #f9f9f9;
   }

   .form .btn:last-of-type {
      background-color: lightgreen;
      margin-left: 4%
   }
</style>
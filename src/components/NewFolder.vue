<template>
   <form 
      @submit.prevent="addFolder" 
      class="new-folder absolute card"
      :class="{show}"
   >
      <p class="title">Add folder</p>
      <label 
         for="folderName"
         class="folder-name-label hide"
      >Folder Name</label>
      <input 
         type="text" 
         id="folderName"
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
         :disabled="disabled"
      >Save</button>
   </form>
</template>

<script>

export default {
   data() {
      return {
         folderName: ''
      }
   },
   computed: {
      show() {
         return this.$store.state.folders.newFolder
      },
      disabled() {
         return this.folderName.trim().length === 0
      }
   },
   methods: {
      addFolder() {
         this.$store.commit('addNewFolder', this.folderName)
      },
      close() {
         this.$store.commit('toggleNewFolder')
      }
   }
}
</script>

<style scoped>
   .new-folder {
      top: 100px;
      left: 50%;
      z-index: 111;
      padding: 20px;
      width: 400px;
      background-color: white;
      transform: scale(0);
      transition: transform 0.2s;
      font-size: 14px;
   }

   .new-folder.show {
      transform: scale(1);
   }

   .new-folder .title {
      font-weight: 500;
   }

   .new-folder .folder-name-label {
      color: #777;
      font-weight: 500;
   }

   .new-folder .folder-name-input {
      background-color: #f9f9f9;
      border-radius: 5px;
      height: 37px;
      margin: 15px 0;
      padding-left: 7px;
   }

   .new-folder .btn {
      padding: 6px;
      border-radius: 5px;
      font-size: 14px;
      width: 48.5%;
      font-weight: 500;
   }

   .new-folder .btn:first-of-type {
      background-color: #f9f9f9;
   }

   .new-folder .btn:last-of-type {
      background-color: lightgreen;
      margin-left: 3%
   }
</style>
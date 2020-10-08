<template>
   <IconButton 
      iconName="bars" 
      class="menu-btn absolute"
   />
</template>

<script>
import IconButton from './IconButton.vue'

export default {
	components: {
		IconButton,
	}
}
</script>

<style>
   .menu-btn {
      top: 2px;
      left: 2px;
   }

   @media only screen and (min-width: 767px) {
      .menu-btn {
         z-index: 1000 !important;
      }
   }
</style>
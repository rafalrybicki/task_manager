<template>
   <form 
      @submit.prevent="submit"
      class="icon-picker"
   >
      <div class="colors w100">
         <div 
            class="icon-wrapper"
            v-for="(color, index) in colors" 
            :key="color"
            :style="{borderColor: index === colorIndex ? colors[colorIndex] : 'transparent'}"
            @click="setColor(index)"
         >
            <font-awesome-icon 
               icon="circle" 
               class="icon"
               :color="color" 
            />
         </div>
      </div>
      <div class="icons w100">
         <div 
            v-for="(icon, index) in icons"
            :key="icon"
            class="icon-wrapper"
            :class="{active: index === iconIndex}"
            :style="{borderColor: index === iconIndex ? colors[colorIndex] : 'transparent'}"
            @click="setIcon(index)"
         >
            <font-awesome-icon 
               :icon="icon" 
               class="icon"
               :color="colors[colorIndex]"
         />
         </div>
      </div>
      <button 
         type="submit" 
         class="btn"
      >Save</button>
   </form>
</template>

<script>
import { colors } from '../helpers/colors'
import { icons } from '../helpers/icons'

export default {
   data() {
      return {
         colors,
         colorIndex: 0,
         icons,
         iconIndex: 0,
         showIcons: false,
         showColors: false
      }
   },
   methods: {
      setColor(index) {
         this.colorIndex = index
      },
      setIcon(index) {
         this.iconIndex = index
      },
      submit() {
         console.log('submit')
         this.$emit('set-icon', {
            color: this.colors[this.colorIndex],
            icon: this.icons[this.iconIndex],
         })
      }
   }
}
</script>

<style>
   .icon-picker .colors, .icon-picker .icons {
      display: grid;
      grid-template-columns: auto auto auto auto auto auto auto;
      text-align: center;
      margin-bottom: 10px;
   }

   .icon-picker .icon {
      height: 30px;
      width: 30px;
   }

   .icon-picker .icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 51px;
      border-width: 2px;
      border-style: solid;
      border-radius: 5px;
      cursor: pointer;
   }
</style>
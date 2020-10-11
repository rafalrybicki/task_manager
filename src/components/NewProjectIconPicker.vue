<template>
   <form 
      @submit.prevent="submit"
      class="icon-picker card absolute w100"
   >
      <div class="colors w100">
         <div 
            class="icon-wrapper"
            v-for="(color, index) in colors" 
            :key="color"
            :style="{borderColor: index === colorIndex ? colors[colorIndex] : 'transparent'}"
            @click="setColor(index)"
            @keyup.enter="setColor(index)"
            tabindex="0"
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
            @keyup.enter="setIcon(index)"
            tabindex="0"
         >
            <font-awesome-icon 
               :icon="icon" 
               class="icon"
               :color="colors[colorIndex]"
            />
         </div>
      </div>
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
</template>

<script>
import { colors } from '../helpers/colors'
import { icons } from '../helpers/icons'

export default {
   props: {
      initialColor: {
         type: Number,
         required: true
      },
      initialIcon: {
         type: Number,
         required: true
      }
   },
   data() {
      return {
         colors,
         icons,
         colorIndex: this.initialColor,
         iconIndex: this.initialIcon
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
         this.$emit('set-data', {
            color: {
               index: this.colorIndex,
               value: this.colors[this.colorIndex]
            },
            icon: {
               index: this.iconIndex,
               value: this.icons[this.iconIndex]
            }
         })
      },
      close() {
         this.$emit('close-picker')
      }
   }
}
</script>

<style>
   .icon-picker {
      background-color: white;
      padding: 20px;
      top: 0;
      left: 0;
   }

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

   .icon-picker .btn {
      padding: 6px;
      border-radius: 5px;
      font-size: 14px;
      width: 48.5%;
      font-weight: 500;
   }

   .icon-picker .btn:first-of-type {
      background-color: #f9f9f9;
   }

   .icon-picker .btn:last-of-type {
      background-color: lightgreen;
      margin-left: 3%
   }
</style>
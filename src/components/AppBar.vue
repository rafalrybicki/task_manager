<template>
   <div class="h100 w100 flex">
      <slot />
      this is button
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
   div {
      height: 43px;
      padding: 5px 12px;
      background-color: #FAFAFA;
      position: fixed;
      top: 0;
      left: 0;
      padding-left: 16.5px;
   }
</style>
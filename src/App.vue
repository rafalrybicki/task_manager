<template>
	<div id="app" class="app" v-on:close-menu="showMenu = false">
		<Menu :class="{show: showMenu}" />
		<MenuButton @click.native="showMenu = !showMenu" />
		<main class="h100 relative">
         <router-view></router-view>
      </main>
		<Overlay 
			@click.native="showMenu = false" 
			:class="{show: showMenu}"
		/>
	</div>
</template>

<script>
import Menu from './components/Menu.vue'
import MenuButton from './components/MenuButton.vue'
import Overlay from './components/Overlay.vue'

export default {
	name: 'App',
	components: {
		Menu,
		MenuButton,
		Overlay
	},
	data() {
		return {
			showMenu: true
		}
	}
}
</script>

<style>
	.app {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	main {
		width: calc(100% - 280px);
		margin: 0 auto;
	}
</style>

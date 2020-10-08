<template>
	<div id="app" class="app" v-on:close-menu="showMenu = false">
		<Menu :class="{show: showMenu}" />
		<main class="h100 w100 relative">
			<IconButton 
				iconName="bars" 
				@click.native="showMenu = !showMenu"
				class="menu-btn absolute"
			/>
         <router-view></router-view>
      </main>
		<Overlay />
	</div>
</template>

<script>
import Menu from './components/Menu.vue'
import IconButton from './components/IconButton.vue'
import Overlay from './components/Overlay.vue'

export default {
	name: 'App',
	components: {
		Menu,
		IconButton,
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
	.menu-btn {
		top: 12px;
		left: 15px;
	}
</style>

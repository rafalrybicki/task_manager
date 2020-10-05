<template>
	<div id="app" class="app flex">
		<Menu :class="{show: showMenu}" />
		<main class="h100 w100 relative">
			<IconButton 
				iconName="bars" 
				@click.native="showMenu = !showMenu"
				class="menu-btn absolute"
			/>
         <router-view></router-view>
      </main>
	</div>
</template>

<script>
import Menu from './components/Menu.vue'
import IconButton from './components/IconButton.vue'

export default {
	name: 'App',
	components: {
		Menu,
		IconButton
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
	}

	main {
		padding: 40px 80px;
	}

	.menu-btn {
		top: 12px;
		left: 15px;
	}
</style>

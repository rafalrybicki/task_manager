<template>
	<div id="app" class="app flex">
		<AppBar>
			<IconButton iconName="bars" @click.native="showMenu = !showMenu"/>
		</AppBar>
		<Menu :class="{show: showMenu}" />
		<main class="h100 w100">
         <router-view></router-view>
      </main>
	</div>
</template>

<script>
import AppBar from './components/AppBar.vue'
import Menu from './components/Menu.vue'
import IconButton from './components/IconButton.vue'

export default {
	name: 'App',
	components: {
		AppBar,
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
		padding: 63px 20px 20px;
	}
</style>

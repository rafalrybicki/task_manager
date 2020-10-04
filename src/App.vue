<template>
	<div id="app">
		<AppBar />
		<Menu />
	</div>
</template>

<script>
import AppBar from './components/AppBar.vue'
import Menu from './components/Menu.vue'

export default {
	name: 'App',
	components: {
		AppBar,
		Menu
	}
}
</script>

<style>
	#app {
		height: 100%;
		width: 100%;
	}
</style>

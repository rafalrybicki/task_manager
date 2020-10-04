<template>
	<div id="app" class="app flex">
		<AppBar />
		<Menu />
		<main class="h100 w100">
         <router-view></router-view>
      </main>
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
	.app {
		height: 100%;
		width: 100%;
	}

	main {
		padding-top: 43px;
	}
</style>

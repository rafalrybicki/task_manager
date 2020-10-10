<template>
	<div id="app" class="app" v-on:close-menu="showMenu = false">
		<NavButton />
		<Menu />
		<main class="h100 relative">
         <router-view></router-view>
      </main>
		<NewFolder />
		<NewProject />
	</div>
</template>

<script>
import Menu from './components/Menu.vue'
import NavButton from './components/NavButton.vue'
import NewFolder from './components/NewFolder.vue'
import NewProject from './components/NewProject.vue'

export default {
	name: 'App',
	components: {
		Menu,
		NavButton,
		NewFolder,
		NewProject
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

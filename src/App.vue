<template>
	<div id="app" class="app" v-on:close-menu="showMenu = false">
		<NavButton />
		<Menu />
		<main class="h100 relative">
         <router-view></router-view>
      </main>
		<NewFolder v-if="showNewFolder" />
		<NewProject v-if="showNewProject" />
		<Overlay :class="{show: showOverlay}" />
	</div>
</template>

<script>
import Menu from './components/Menu.vue'
import NavButton from './components/NavButton.vue'
import NewFolder from './components/NewFolder.vue'
import NewProject from './components/NewProject.vue'
import Overlay from './components/Overlay.vue'

export default {
	name: 'App',
	components: {
		Menu,
		NavButton,
		NewFolder,
		NewProject,
		Overlay
	},
	computed: {
		showNewFolder() {
         return this.$store.state.folders.newFolder
		},
		showNewProject() {
         return this.$store.state.folders.newProject
		},
		showMenu() {
			return this.$store.state.menu
		},
		showOverlay() {
			return this.showNewFolder || this.showNewProject || (this.showMenu && window.innerWidth < 769)
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

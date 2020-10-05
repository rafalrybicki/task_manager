import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInbox, faCalendar, faCalendarAlt, faStar, faCheck, faBars, faList, faPlus, faFolder, faFolderPlus, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
// import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInbox, faCalendar, faCalendarAlt, faStar, faCheck, faBars, faList, faPlus, faFolder, faFolderPlus, faFolderOpen )
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

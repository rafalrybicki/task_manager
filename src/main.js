import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInbox, faCalendar, faCalendarAlt, faStar, faCheck, faBars, faList, faPlus, faFolder, faFolderOpen, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
// import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInbox, faCalendar, faCalendarAlt, faStar, faCheck, faBars, faList, faPlus, faFolder, faFolderOpen, faEllipsisH )
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
import smartLists from './modules/smartLists'
import folders from './modules/folders'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
   state: {
      menu: true,
   },
   modules: {
      smartLists,
      folders
   },
   strict: debug,
})
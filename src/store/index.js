import Vue from 'vue'
import Vuex from 'vuex'
import smartLists from './modules/smartLists'
import projectsFolders from './modules/projectsFolders'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
   state: {
      menu: true,
      newFolder: false,
      newProject: true
   },
   modules: {
      smartLists,
      projectsFolders
   },
   strict: debug,
})
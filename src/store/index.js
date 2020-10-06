import Vue from 'vue'
import Vuex from 'vuex'
import smartLists from './modules/smartLists'
import projects from './modules/projects'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
   modules: {
      smartLists,
      projects
   },
   strict: debug,
})
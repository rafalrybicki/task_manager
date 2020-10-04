import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Tasks = () => import(/* webpackChunkName: "Tasks" */ './pages/Tasks.vue')

const routes = [
   { path: '/', redirect: '/inbox', component: Tasks, name: 'home'},
   { path: '/asap/:id?', component: Tasks, name: 'asap' },
   { path: '/inbox/:id?', component: Tasks, name: 'inbox' },
   { path: '/today/:id?', component: Tasks, name: 'today' },
   { path: '/upcoming/:id?', component: Tasks, name: 'upcoming' },
   { path: '*', redirect: '/inbox' }
]

const router = new VueRouter({
   mode: 'history',
   routes 
})

export default router
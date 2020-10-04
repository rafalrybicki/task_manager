import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Tasks = () => import(/* webpackChunkName: "Tasks" */ './pages/Tasks.vue')

const routes = [
   { path: '/', redirect: '/inbox', component: Tasks},
   { path: '/inbox/:id?', component: Tasks, name: 'inbox' },
   { path: '/important/:id?', component: Tasks, name: 'important' },
   { path: '/today/:id?', component: Tasks, name: 'today' },
   { path: '/upcoming/:id?', component: Tasks, name: 'upcoming' },
   { path: '/done/:id?', component: Tasks, name: 'done' },
   { path: '*', redirect: '/inbox' }
]

const router = new VueRouter({
   mode: 'history',
   routes 
})

export default router
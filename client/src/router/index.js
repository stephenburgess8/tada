import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todos',
    name: 'TodosList',
    component: () => import('../views/TodosList.vue')
  },
  {
    path: '/todo/add',
    name: 'todoAdd',
    component: () => import('../views/TodoAdd.vue')
  },
  {
    path: '/todos/:id',
    name: 'todoSingle',
    component: () => import('../views/TodoSingle.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

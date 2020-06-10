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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/tareas',
    name: 'tareas',
    component: () => import('../views/tareas.vue')
  },
  {
    path: '/inscribete-secundaria',
    name: 'inscribete-secundaria',
    component: () => import('../views/inscribete-secundaria.vue')
  },
  {
    path: '/inscribete-primaria',
    name: 'inscribete-primaria',
    component: () => import('../views/inscribete-primaria.vue')
  },
  {
    path: '/socio',
    name: 'socio',
    component: () => import('../views/socio.vue')
  },
  {
    path: '/nivel',
    name: 'nivel',
    component: () => import('../views/nivel.vue')
  },
  {
    path: '/estudiante',
    name: 'estudiante',
    component: () => import('../views/estudiante.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import('../views/inicio.vue')
  },
  {
    path: '/',
    name: 'LandingPage.vue',
    component: () => import('../views/LandingPage.vue')
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('../views/Nosotros.vue')
  },
  // {
  //   path: '/recover-password',
  //   name: 'recover-password',
  //   component: () => import('../views/RecoverPassword.vue')
  // },
  // {
  //   path: '/recover-password-email',
  //   name: 'recover-password-email',
  //   component: () => import('../views/RecoverPasswordEmail.vue')
  // },
  // {
  //   path: '/registry',
  //   name: 'registry',
  //   component: () => import('../views/Registry.vue')
  // },
  // {
  //   path: '/user-profile',
  //   name: 'user-profile',
  //   component: () => import('../views/User_profile.vue')
  // },
]

const router = new VueRouter({
  routes,
  base:'/',
  mode:"history"
})

export default router

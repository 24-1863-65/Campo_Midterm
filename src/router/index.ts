import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '../App.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 85
      }
    }

    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router

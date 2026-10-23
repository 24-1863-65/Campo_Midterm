
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 86,
        behavior: 'smooth'
      }
    }

    return { top: 0 }
  }
})

export default router

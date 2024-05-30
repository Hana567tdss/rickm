import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import location from '../views/location.vue'
import character from '../views/character.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/episode/:id',
      name: 'episode',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/episode.vue')
    },
    {
      path: '/character/:id',
      name: 'character',
      component:  () => import('../views/character.vue')
    },
    
    // {
    //   path: '/character/:id',
    //   name: 'characterid',
    //   component: character
    // },
    {
      path: '/location/:id',
      name: 'location',
      component:  () => import('../views/location.vue')
      },
  ]
})

export default router

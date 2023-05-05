import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClasificationView from '../views/ClasificationView.vue'
import CalendarView from '../views/CalendarView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/calendario',
    name: 'calendario',
    component: CalendarView
  },
  {
    path: '/clasificaciones',
    name: 'clasificaciones',
    component: ClasificationView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

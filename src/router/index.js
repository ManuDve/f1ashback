import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClasificationView from '../views/ClasificationView.vue'
import CalendarView from '../views/CalendarView.vue'
import FormularioView from '../views/FormularioView.vue'
import ErrorView from '../views/ErrorView.vue'

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
    redirect: '/clasificaciones/2023',
    children: [
      {
        path: '/clasificaciones/:year',
        name: 'clasificaciones',
        component: ClasificationView,
        props: true
      },
    ]
  },

  {
    path: '/notificacion',
    name: 'notificacion',
    component: FormularioView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Redirect Error 404',
    component: ErrorView
  },
  {
    path: '/404',
    name: 'Error 404',
    component: ErrorView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

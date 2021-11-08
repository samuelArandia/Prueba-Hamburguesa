import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Burgers from '../views/Burgers.vue'
import Editar from '../views/Editar.vue'
import Nueva from '../views/Nueva.vue'



export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Editar/:id',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/nueva',
    name: 'Nueva',
    component: Nueva
  },
  {
    path: '/Burgers',
    name: 'Burgers',
    component: Burgers
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

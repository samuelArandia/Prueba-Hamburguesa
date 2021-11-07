import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Burgers from '../views/Burgers.vue'
import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },
  {
    path: '/editar',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/Burgers',
    name: 'Hamburguesa',
    component: Burgers
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Burgers from '../views/Burgers.vue'

import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'

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
  },{
    path: '/listar',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/hamburguesas',
    name: 'hamburguesas',
    component: Burgers
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

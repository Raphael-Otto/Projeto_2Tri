import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/livros',
      name: 'livros',
      component: () => import('../views/LivrosView.vue')
    },
    {
      path: '/editoras',
      name: 'editoras',
      component: () => import('../views/EditorasView.vue')
    },
    {
      path: '/autores',
      name: 'autores',
      component: () => import('../views/AutoresView.vue')
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: () => import('../views/ProdutosView.vue')
    },
    {
      path: '/cad_editoras',
      name: 'cad_editoras',
      component: () => import('../views/CadEditorasView.vue')
    },
    {
      path: '/login_usuario',
      name: 'login_usuario',
      component: () => import('../views/LoginUsuarioView.vue')
    },
    {
      path: '/cadastro_usuario',
      name: 'cadastro_usuario',
      component: () => import('../views/CadUsuarioView.vue')
    },
  ]
})

export default router

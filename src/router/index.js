import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:category?',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
      props: route => ({ category: route.params.category })
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../components/NotFound.vue'),
      props: route => ({ endpoint: route.params.pathMatch})
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { top: 0 };
  }
})

export default router

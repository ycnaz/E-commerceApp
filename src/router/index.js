import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useProgressStore } from '@/stores/progressStore';
import { useUserAuthStore } from '@/stores/userAuthStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: false }
    },
    {
      path: '/products/:category?',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
      props: route => ({ category: route.params.category || "all" }),
      meta: { requiresAuth: false }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../components/NotFound.vue'),
      props: route => ({ endpoint: route.params.pathMatch}),
      meta: { requiresAuth: false }
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
      meta: { requiresAuth: false },
      children: [
        {
          path: 'sign-in',
          name: 'sign-in',
          component: () => import('../components/SignIn.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../components/RegisterComp.vue'),
          meta: { requiresAuth: false }
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      meta: { requiresAuth: true }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { top: 0 };
  }
})

router.beforeEach((to, from, next) => {
  if (to === from) return false

  const progressStore = useProgressStore()
  const userAuthStore = useUserAuthStore()

  progressStore.setLoading(true)

  if (to.meta.requiresAuth && !userAuthStore.isAuth) {
    next({
      name: 'sign-in',
      query: { redirect: to.fullPath },
    })
  } else {
    setTimeout(() => {
      next()
    }, 1000) // Added delay to show the progress bar
  }
})

router.afterEach(() => {
  const progressStore = useProgressStore()
  progressStore.setLoading(false)
})

export default router

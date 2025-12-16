import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SplashScreen from '../components/splash-screen.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: SplashScreen
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login-page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

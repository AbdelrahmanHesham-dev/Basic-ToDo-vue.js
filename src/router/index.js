import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Home Page",
      },
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/showTodos.vue'),
      meta: {
        title: "Show Todos",
      },
    },
  ],
});

export default router;

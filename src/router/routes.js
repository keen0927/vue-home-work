// Page
import Home from '../pages/Home.vue';
import Router from '../pages/Router.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/router',
    name: 'router',
    component: Router
  }
]
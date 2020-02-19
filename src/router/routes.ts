import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '/style-guide',
    name: 'StyleGuide',
    component: () => import(/* webpackChunkName: "style-guide" */ '@/views/StyleGuide.vue'),
  },
];

export default routes;

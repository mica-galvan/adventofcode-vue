//router.js
import { createRouter, createWebHashHistory } from 'vue-router';
import Day01 from './components/Day01.vue';
import Day02 from './components/Day02.vue';
import Day03 from './components/Day03.vue';
import Day04 from './components/Day04.vue';
import Day05 from './components/Day05.vue';
import Day06 from './components/Day06.vue';
import Home from './components/Home.vue';

const routes = [
  { path: "/", name: "Home", component: Home},
  { path: '/day1', component: Day01 },
  { path: '/day2', component: Day02 },
  { path: '/day3', component: Day03 },
  { path: '/day4', component: Day04 },
  { path: '/day5', component: Day05 },
  { path: '/day6', component: Day06 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
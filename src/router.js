import Vue from 'vue';
import Router from 'vue-router';
import summary from '@/views/Summary.vue';
import L1 from '@/views/L1.vue';
import L2 from '@/views/L2.vue';
import L3 from '@/views/L3.vue';
import M1 from '@/views/M1.vue';
import M2 from '@/views/M2.vue';
import Staff from '@/views/Staff.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: summary,
    },
    {
      path: '/L1',
      component: L1,
    },
    {
      path: '/L2',
      component: L2,
    },
    {
      path: '/L3',
      component: L3,
    },
    {
      path: '/M1',
      component: M1,
    },
    {
      path: '/M2',
      component: M2,
    },
    {
      path: '/Staff',
      component: Staff,
    },
  ],
});

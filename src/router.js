import Vue from 'vue';
import Router from 'vue-router';
import summary from '@/views/Summary.vue';
import Staff from '@/views/Staff.vue';
import Photo from '@/views/Photo.vue';
import Evt from '@/views/Event.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: summary,
    },
    {
      path: '/Staff',
      component: Staff,
    },
    {
      path: '/photo',
      component: Photo,
    },
    {
      path: '/event',
      component: Evt,
    },
  ],
});

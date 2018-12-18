import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signin from './views/Signin.vue';

import store from '@/store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
      meta: {
        checkAuth: true,
      },
    },
  ],
});

router.beforeEach((to, _, next) => {
  const requireAuth = to.matched.some((record) => record.meta.requireAuth);
  const checkAuth = to.matched.some((record) => record.meta.checkAuth);
  const currentUser = store.state.user.user;

  if (requireAuth) {
    if (!currentUser) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else if (checkAuth) {
    if (currentUser) {
      next({
        path: '/',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

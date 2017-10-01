import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Index from '@/components/Index';
import Login from '@/components/Login';
import SignUp from '@/components/Sign-up';
import User from '@/components/User';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/*',
      redirect: '/login',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (store.state.token === '') {
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

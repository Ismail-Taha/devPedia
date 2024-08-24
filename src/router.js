import Vue from 'vue'
import Router from 'vue-router'
import VueDemo from '@/components/VueDemo'
import Messages from '@/components/Messages'
import Activity from '@/components/Activity'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: VueDemo
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activity
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      //meta: { requiresAuth: true }
    }
  ]
});

// Navigation guard to protect routes that require authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken');
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/sign-in');
  } else {
    next();
  }
});

export default router;

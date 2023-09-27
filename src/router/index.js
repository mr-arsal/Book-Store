// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue'),
      },
      {
        path: '/login',
        name: 'LogIn',
        component: () => import('@/views/LogIn.vue'),
      },

      // User Dashboard Nested Children
      // {
      //   path: '/userdashboard',
      //   name: 'UserDashboard',
      //   component: () => import('@/components/UserDashboard.vue'),
      //   children: [
      //     {
      //       path: 'profile',
      //       name: 'UserProfile',
      //       component: () => import('@/components/UserProfile.vue')
      //     },
      //     {
      //       path: 'orderlist',
      //       name: 'OrderList',
      //       component: () => import('@/components/OrderList.vue')
      //     },
      //     {
      //       path: 'trackorder',
      //       name: 'UserTrackOrder',
      //       component: () => import('@/components/UserTrackOrder.vue')
      //     }
      //   ]
      // },

      {
        path: "/userdashboard",
        name: "UserDashboard",
        component: () => import('@/components/UserDashboard.vue'),
        children:
          [
            {
              path: "profile",
              name: "UserProfile",
              component: () => import('@/components/UserProfile.vue'),
            },
          ]
      },


      // -------------------------------------------------------
      {
        path: '/categories',
        name: 'Categories',
        component: () => import('@/components/Categories.vue'),
      },
      {
        path: '/products',
        name: 'Poducts',
        component: () => import('@/components/Products.vue'),
      },
      // Product Details
      {
        path: '/productdetails',
        name: 'PoductDetails',
        component: () => import('@/views/ProductDetails.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

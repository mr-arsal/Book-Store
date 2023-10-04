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

      {
        path: "/userdashboard",
        name: "UserDashboard",
        component: () => import('@/components/UserDashboard.vue'),
        children: [
          {
            path: "",
            redirect: "/userdashboard/profile",
          },
          {
            path: "profile",
            name: "UserProfile",
            component: () => import('@/components/UserProfile.vue'),
          },
          {
            path: 'orderlist',
            name: 'OrderList',
            component: () => import('@/components/OrderList.vue')
          },
          {
            path: 'trackorder',
            name: 'UserTrackOrder',
            component: () => import('@/components/UserTrackOrder.vue')
          }
        ],
      },

      {
        path: "/admindashboard",
        name: "AdminDashboard",
        component: () => import('@/components/AdminDashboard.vue'),
      },

      {
        path: "/addbook",
        name: "AddBook",
        component: () => import('@/components/AddBook.vue'),
      },

      {
        path: "/editbook/:id",
        name: "EditBook",
        component: () => import('@/components/EditBook.vue'),
      },

      {
        path: "/allusers",
        name: "AllUsers",
        component: () => import('@/components/AllUsers.vue'),
      },

      {
        path: "/manageorders",
        name: "ManageOrders",
        component: () => import('@/components/ManageOrders.vue'),
      },

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
        path: '/productdetails/:id',
        name: 'PoductDetails',
        component: () => import('@/views/ProductDetails.vue'),
        props: true
      },

      // Add To Cart
      {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('@/components/Checkout.vue'),
        props: true
      },

      // Cart Books
      {
        path: '/cart',
        name: 'CartBooks',
        component: () => import('@/views/CartBooks.vue'),
        props: true
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

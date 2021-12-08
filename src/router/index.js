import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

import DashboardLayout from "../views/layouts/Dashboard.vue";

import Fullwidth from "../views/layouts/Fullwidth.vue";

import Login from "../views/auth/Login.vue";

import Register from "../views/auth/Register.vue";

import OTP from "../views/auth/OTP.vue";

import ForgotPassword from "../views/auth/ForgotPassword.vue";

// import Home from "../views/front/Home.vue";

import MarketPlace from "../views/front/MarketPlace.vue";

import Details from "../views/front/Details.vue";

import Reservation from "../views/front/Reservation.vue";

// import Home from "../views/front/Home.vue";

import AgentHome from "../views/agent/Home.vue";

import AgentNotifications from "../views/agent/Notifications.vue";

import CreateListing from "../views/agent/CreateListing.vue";

import AdminHome from "../views/admin/Home.vue";

import AdminNotifications from "../views/admin/Notifications.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/auth/",
    name:"Fullwidth",
    component: Fullwidth,
      children: [
          {
            path: "login",
            name: "Login",
            component: Login,

          },

          {
            path: "register",
            name: "Register",
            component: Register,

          },

          {
            path: "otp",
            name: "OTP",
            component: OTP,

          },

            {
            path: "forgot-password",
            name: "ForgotPassword",
            component: ForgotPassword,

          },


          {
            path: "/",
            name: "Home",
            component: Login,

          },
      ]
  },

  {
    path: "/market-place",
    name: "MarketPlace",
    component: MarketPlace,

  },

  {
    path: "/details",
    name: "Details",
    component: Details,

  },

  {
    path: "/reservation",
    name: "Reservation",
    component: Reservation,

  },


  {
    path: "/agent/",
    name: "Homex",
    component: DashboardLayout,
      children: [
        {
          path:'dashboard',
          component: AgentHome
        },
        {
          path:'create-new',
          component: CreateListing
        },
        {
          path: 'notifications',
          component: AgentNotifications
        }
      ]
  },

  {
    path: "/admin/",
    name: "Home",
    component: DashboardLayout,
      children: [
        {
          path:'dashboard',
          component: AdminHome
        },
        {
          path: 'notifications',
          component: AdminNotifications
        }
      ]
  },



  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

];

const router = new VueRouter({
  routes,
});

export default router;

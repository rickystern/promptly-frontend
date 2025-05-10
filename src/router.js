// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Define your routes
const routes = [
  {
    name: "login",
    path: "/",
    component: () => import("./views/auth/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("./components/CustomerForm.vue"),
    meta: {
      title: "Dashboard",
    },
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("./views/Menu.vue"),
    meta: {
      title: "Menu",
    },
  },

  // Add more routes as needed
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

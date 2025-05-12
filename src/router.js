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

  {
    path: "/contact-log",
    name: "ContactLog",
    component: () => import("./views/ContactLog.vue"),
    meta: {
      title: "Contact Log",
    },
  },

  {
    path: "/company/register",
    name: "CompanyRegistration",
    component: () => import("./views/company/CompanyRegistration.vue"),
    meta: { standalone: true },
  },

  // Add more routes as needed

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("./views/NotFound.vue"), // Create a simple 404 page
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

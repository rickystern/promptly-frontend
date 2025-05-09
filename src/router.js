// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import components
import CustomerForm from './components/CustomerForm.vue'
import Menu from './views/Menu.vue'
// For components that don't need to be loaded immediately, use lazy loading:
// const About = () => import('../views/About.vue')

// Define your routes
const routes = [
  {
    path: '/',
    name: 'CustomerForm',
    component: CustomerForm
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    props: true // Pass route params as props to the component
  },
//   {
//     path: '/about',
//     name: 'About',
//     // Lazy loading example:
//     component: () => import('../views/About.vue')
//   },
  // Add more routes as needed
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
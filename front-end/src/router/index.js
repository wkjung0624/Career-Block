import {
  createRouter,
  createWebHistory
} from "vue-router";
// <<<<<<< HEAD
// import Login from "../components/Login.vue";

import Agree from "../views/Agree.vue";
import Learn from "../views/Learn.vue";


const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "agree",
    name: "Agree",
    component: Agree,
  },
  {
    path: "learn",
    name: "Learn",
    component: Learn,
  },

  // {
  //   path: "/",
  //   name: "Login",
  //   component: Login,
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
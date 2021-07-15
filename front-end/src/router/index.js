import {
  createRouter,
  createWebHistory
} from "vue-router";

// import Login from "../components/Login.vue";
import Home from "../views/Home.vue";
import Agree from "../views/Agree.vue";

import Learn from "../views/Learn.vue";

import Education from "../components/Education.vue";
import Career from "../components/Career.vue";

// const routes = [{
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
const routes = [{



    path: "/",
    name: "Home",
    component: Home,
  },
  {

    path: "/agree",
    name: "Agree",
    component: Agree,
  },

  {
    path: "/learn",
    name: "Learn",
    component: Learn,
  },


  {
    path: "/education",
    name: "Education",
    component: Education,
  },
  {
    path: "/career",
    name: "Career",
    component: Career,
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
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../components/Profile.vue"),
  },
  {
    path: "/personal",
    name: "Personal",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../components/Personal.vue"),
  },
  {
    path: "/education",
    name: "Education",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../components/Education.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
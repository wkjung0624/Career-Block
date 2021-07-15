import { createRouter, createWebHistory } from "vue-router";

// import Login from "../components/Login.vue";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/",
  //   name: "Login",
  //   component: Login,
  // },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import( /* webpackChunkName: "about" */ "../components/Profile.vue"),
  },
  {
    path: "/personal",
    name: "Personal",
    component: () =>
      import( /* webpackChunkName: "about" */ "../components/Personal.vue"),
  },
  {
    path: "/education",
    name: "Education",
    component: () =>
      import( /* webpackChunkName: "about" */ "../components/Education.vue"),
  },
  {
    path: "/learn",
    name: "Learn",
    component: () =>
      import( /* webpackChunkName: "about" */ "../components/Learn.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

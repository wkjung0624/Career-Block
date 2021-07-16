import {
  createRouter,
  createWebHistory
} from "vue-router";

import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import Agree from "../components/Agree.vue";
import Learn from "../components/Learn.vue";
import Career from "../components/Career.vue";
import Personal from "../components/Personal.vue"
import Education from "../components/Education.vue";
import Certification from "../components/Certification.vue";


const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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
  {
    path: "/about",
    name: "About",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
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
    path: "/certification",
    name: "Certification",
    component: () =>
      import( /* webpackChunkName: "about" */ "../components/Certification.vue"),
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
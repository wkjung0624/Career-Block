import {
  createRouter,
  createWebHistory
} from "vue-router";

import Home from "../views/Home.vue";
import Registration from "../views/Registration.vue";

import Login from "../components/Login.vue";
import Agree from "../components/Agree.vue";
import Learn from "../components/Learn.vue";
import Search from "../components/Search.vue";
import Career from "../components/Career.vue";
// import Project from "../components/Project.vue";
import Personal from "../components/Personal.vue";
import Education from "../components/Education.vue";
import Certification from "../components/Certification.vue";
import ResumeLink from "../views/Resume-Link.vue";
import MyResume from "../views/MyResume.vue";


const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/project",
  //   name: "Project",
  //   component: Project,
  // },
  {
    path: "/myresume",
    name: "MyResume",
    component: MyResume,
  },
  {
    path: "/resumelink",
    name: "ResumeLink",
    component: ResumeLink
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
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
    path: "/certification",
    name: "Certification",
    component: Certification,
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
    component: Personal
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
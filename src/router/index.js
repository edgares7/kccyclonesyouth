import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Coaches from "../views/Coaches.vue";
import CoachJeff from "../views/CoachJeff.vue";
import CoachHenrique from "../views/CoachHenrique.vue";
import CoachEdgar from "../views/CoachEdgar.vue";
import CoachJesse from "../views/CoachJesse.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/coaches",
    name: "Coaches",
    component: Coaches
  },
  {
    path: "/coaches/jeff",
    name: "CoachJeff",
    component: CoachJeff
  },
  {
    path: "/coaches/henrique",
    name: "CoachHenrique",
    component: CoachHenrique
  },
  {
    path: "/coaches/edgar",
    name: "CoachEdgar",
    component: CoachEdgar
  },
  {
    path: "/coaches/jesse",
    name: "CoachJesse",
    component: CoachJesse
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

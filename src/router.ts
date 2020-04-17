/*
 * @Description:
 * @Company: BEPAL
 * @Author: Raven
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-17 16:39:53
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const About = () => import(/* webpackChunkName: "about" */ "./views/About.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});

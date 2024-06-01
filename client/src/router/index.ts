import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:patchMatch(.*)*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "NotFound" */'@/views/NotFound.vue'),
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

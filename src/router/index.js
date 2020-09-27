import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {layout: 'main'},
    component: () => import('../views/Home.vue')
  },
  {
    path: "/clients",
    name: "Clients",
    meta: {layout: 'main'},
    component: () => import('../views/Clients.vue')
  },
  {
    path: "/clients/:id",
    name: "client-detail",
    meta: {layout: 'main'},
    component: () => import('../views/ClientDetail.vue')
  },
  {
    path: "/employes",
    name: "Employes",
    meta: {layout: 'main'},
    component: () => import('../views/Employes.vue')
  },{
    path: "/settings",
    name: "Settings",
    meta: {layout: 'main'},
    component: () => import('../views/Settings.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

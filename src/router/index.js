import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductDescription from "../views/ProductDescription.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/ProductDescription/:id",
    name: "ProductDescription",
    component: ProductDescription,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

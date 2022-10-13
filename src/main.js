import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
var infiniteScroll =  require('vue-infinite-scroll');


createApp(App).use(store).use(router).use(infiniteScroll).mount("#app");

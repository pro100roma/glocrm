import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import tooltipDirective from "@/directives/tooltip.directive";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

Vue.directive('tooltip', tooltipDirective)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

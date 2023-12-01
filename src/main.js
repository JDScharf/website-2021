import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'G-HW1EQTLWH3'
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");

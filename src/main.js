import Vue from "vue";
import App from "./App.vue";

import { SlatePlugin } from 'slate-vue';
Vue.use(SlatePlugin)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

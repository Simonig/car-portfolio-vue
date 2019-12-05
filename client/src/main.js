import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
import { MdCard } from 'vue-material/dist/components';


Vue.use(MdCard);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

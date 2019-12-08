import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
import VueMaterial from 'vue-material';
import ApiService from './api.serivce';

Vue.use(VueMaterial);
ApiService.init();

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

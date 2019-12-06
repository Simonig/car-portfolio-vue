import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
import { MdCard, MdList, MdApp, MdIcon, MdDrawer, MdToolbar, MdContent} from 'vue-material/dist/components';

Vue.use(MdCard);
Vue.use(MdList);
Vue.use(MdApp);
Vue.use(MdDrawer);
Vue.use(MdIcon);
Vue.use(MdToolbar);
Vue.use(MdContent);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue';
import ElementUI from 'element-ui';
// import 'node_modules/element-ui/lib/theme-chalk/index.css'
import App from './App.vue';
import router from './router';
import store from './store';
import initFirebase from '@/middleware/firebase';

Vue.use(ElementUI);

Vue.config.productionTip = false;

initFirebase();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

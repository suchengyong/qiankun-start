import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from "ant-design-vue";
import startQiankun from "./microService/index";
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(Antd);

startQiankun({
  prefetch:false // 取消预加载
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#baseApp')

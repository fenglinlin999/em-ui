import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import emUi from './packages/index'
Vue.use(emUi);
new Vue({
  render: h => h(App),
}).$mount('#app')

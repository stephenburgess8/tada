import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

const domain = 'dev-jgoxkuks.us.auth0.com'
const clientId = 'WvKhu0TqII8yQC2Mtw288UXv36HLPuDf'
const audience = 'https://tada-prototype.herokuapp.com/'

import router from './router'
import { Auth0Plugin } from "./auth"
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

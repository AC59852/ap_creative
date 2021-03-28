import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueFullPage from "vue-fullpage.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faLinkedin, faReddit, faSpotify, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faLinkedin, 
  faInstagram, 
  faFacebook, 
  faYoutube, 
  faSpotify, 
  faTwitter, 
  faReddit
  )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueFullPage);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

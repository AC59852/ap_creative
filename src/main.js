// Top level imports for key packages
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueMeta from "vue-meta";
import VueFullPage from "vue-fullpage.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  // Font Awesome Icon Imports
  faFacebook,
  faInstagram,
  faLinkedin,
  faReddit,
  faSpotify,
  faTwitter,
  faYoutube,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add the ability to use the icons globally
library.add(
  faLinkedin,
  faInstagram,
  faFacebook,
  faYoutube,
  faSpotify,
  faTwitter,
  faReddit,
  faDribbble,
  faGithub
);

// Register the imports for use
Vue.use(VueMeta);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueFullPage);

Vue.config.productionTip = false;

// Set the instance
new Vue({
  watch: {
    "$route.path": function () {
      let nav = document.querySelector("#topNav");
      nav.classList.remove("dark");
    },
  },

  router,
  render: (h) => h(App),
}).$mount("#app");

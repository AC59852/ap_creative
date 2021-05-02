<template>
  <div id="app">
    <Navigation />
    <PopUp id="popup" />
    <Refresh id="refresh" />
    <router-view />
  </div>
</template>

<script>
// Imports first
import Navigation from "@/components/Navigation.vue";
import PopUp from "@/components/PopUp.vue";
import Refresh from "@/components/Refresh.vue";

export default {
  created() {
    if (
      // Check if the application is running in the browser instead of as an app
      // and if the window width size is under 500px
      !window.matchMedia("(display-mode: standalone)").matches &&
      window.innerWidth <= 500
    ) {
      // Set a popup to display depending on the truth of the If statement
      setTimeout(() => {
        document.getElementById("popup").classList.toggle("popupShow");
      }, 10);
    } else if (
      // If the application is running as an app and is under 500px
      window.matchMedia("(display-mode: standalone)").matches &&
      window.innerWidth <= 500
    ) {
      // Just log the window size and confirm that it is in app form
      let mobWidth = window.innerWidth;
      console.log(`This is running as standalone at ${mobWidth}`);
    } else {
      return;
    }
  },

  mounted() {
    if (
      window.matchMedia("(display-mode: standalone)").matches &&
      window.innerWidth <= 500
    ) {
      document.querySelector(".popToggle").style.display = "none";
    } else {
      return;
    }
  },

  watch: {
    $route(to, from) {
      setTimeout(() => {
        document.querySelector("#topNav").classList.remove("dark");
      }, 1);
    },
  },

  methods: {},

  components: {
    // Register the imported components
    Navigation: Navigation,
    PopUp: PopUp,
    Refresh: Refresh,
  },
};
</script>

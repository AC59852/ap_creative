<template>
  <div id="app">
    <Navigation />
    <PopUp id="popup" />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import PopUp from "@/components/PopUp.vue";
export default {
  created() {
    if (
      !window.matchMedia("(display-mode: standalone)").matches &&
      window.innerWidth <= 500
    ) {
      console.log("This is running as desktop");

      setTimeout(() => {
        document.getElementById("popup").classList.toggle("popupShow");
      }, 10);
    } else if (
      window.matchMedia("(display-mode: standalone)").matches &&
      window.innerWidth <= 500
    ) {
      let mobHeight = window.innerWidth;
      console.log(`This is running as standalone at ${mobHeight}`);
    } else {
      return;
    }
  },

  methods: {},

  components: {
    Navigation: Navigation,
    PopUp: PopUp,
  },
};
</script>

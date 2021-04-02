<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue'
  export default {

    mounted() {
      var ua = window.navigator.userAgent;
      var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
      var webkit = !!ua.match(/WebKit/i);
      var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

      if (iOSSafari == true) {
        console.log("This worked")
      } else {
        console.log("this isnt safari")
      }
    },

    methods: {
    },

    components: {
      Navigation: Navigation
    }
  }
</script>
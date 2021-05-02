<template>
  <header>
    <nav id="topNav">
      <div class="iconCon">
        <router-link to="/"
          ><img src="img/svgs/AP_logo_dark.svg" alt="logo"
        /></router-link>
        <img
          @click="showPopup()"
          class="popToggle"
          src="img/svgs/info.svg"
          alt="Mobile App Download Popup"
        />
      </div>
      <ul>
        <span @click="showMenu()">X</span>
        <li @click="showMenu()"><router-link to="/">Home</router-link></li>
        <li @click="showMenu()">
          <router-link to="/about">About</router-link>
        </li>
        <li @click="showMenu()">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
      <img
        src="img/svgs/menu.svg"
        alt="dropdown menu icon"
        @click="showMenu()"
      />
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    // Toggle the nav menu
    showMenu() {
      document.querySelector("#topNav ul").classList.toggle("show");

      if (document.querySelector("body").classList.contains("fp-viewing-0")) {
        return;
      }

      if (document.querySelector("html").classList.contains("fp-enabled")) {
        document.querySelector("#topNav").classList.toggle("dark");
      }
    },

    showPopup() {
      document.querySelector("#popup").classList.toggle("popupShow");
    },
  },
};
</script>

<style></style>

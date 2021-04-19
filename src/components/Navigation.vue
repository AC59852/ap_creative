<template>
  <header>
    <nav id="topNav">
      <div class="iconCon">
        <router-link to="/"
          ><img src="img/svgs/AP_logo_dark.svg" alt="logo"
        /></router-link>
        <img @click="showMenu()" src="img/svgs/info.svg" alt="search icon" />
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
    showMenu() {
      document.querySelector("#topNav ul").classList.toggle("show");
      if (document.querySelector("body").classList.contains("fp-viewing-1")) {
        document.querySelector("#topNav").classList.toggle("dark");
      }
    },
  },
};
</script>

<style></style>

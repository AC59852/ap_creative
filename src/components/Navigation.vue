<template>
  <header>
      <nav id="topNav">
          <img src="img/svgs/menu.svg" alt="dropdown menu icon" @click="showMenu()">
          <ul>
              <span @click="showMenu()">X</span>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        <div class="iconCon">
          <router-link to="/"><img src="img/svgs/AP_logo_dark.svg" alt="logo"></router-link>
          <img @click="showMenu()" src="img/svgs/search.svg" alt="search icon">
      </div>
      </nav>
  </header>
</template>

<script>
export default {
    methods: {
        showMenu() {
            document.querySelector("#topNav ul").classList.toggle("show");
        }
    }
}
</script>

<style>

</style>
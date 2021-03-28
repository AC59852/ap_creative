<template>
  <section id="person">
      <h3>{{ currentPerson.title }}</h3>
      <img :src="'img/' + currentPerson.image" :alt="'Photo of ' + currentPerson.name">
      <p>{{ currentPerson.desc }}</p>
      <div class="icons">
          <router-link  v-for="social in currentPerson.socials" :key="social.icon" to="/" target="_blank"><font-awesome-icon :icon="['fab', social.icon]"/></router-link>
      </div>
  </section>
</template>

<script>
export default {
    props: ["currentPerson"]
}
</script>
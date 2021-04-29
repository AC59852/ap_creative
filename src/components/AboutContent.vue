<template>
  <section id="person">
    <h3>{{ currentPerson.title }}</h3>
    <img
      :src="'img/' + currentPerson.image"
      :alt="'Photo of ' + currentPerson.name"
    />
    <p>{{ currentPerson.desc }}</p>
    <div class="icons">
      <a
        v-for="social in currentPerson.socials"
        :key="social.icon"
        :href="social.link"
        target="_blank"
        ><font-awesome-icon :icon="['fab', social.icon]"
      /></a>
    </div>
  </section>
</template>

<script>
export default {
  // Define the prop being carried over from a different component/vue
  props: ["currentPerson"],
};
</script>

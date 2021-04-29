<template>
  <section id="about">
    <div class="aboutWrapper">
      <div class="aboutNames">
        <div
          @click="
            changePerson(person);
            setActive(index);
          "
          :class="{ active: activePerson === index }"
          v-for="(person, index) in people"
          :key="index"
        >
          <h2>{{ person.name }}</h2>
        </div>
      </div>
      <AboutContent :currentPerson="currentPerson" class="aboutContent" />
    </div>
  </section>
</template>

<script>
// Imports first
import AboutContent from "@/components/AboutContent.vue";

export default {
  mounted() {
    // When the vue model is mounted, set the current person as the first in the "people" data array
    this.currentPerson = this.people[0];
  },

  data() {
    return {
      // activePerson is set to 0, since that's the id of the first person in the "people" data array
      activePerson: 0,

      // Dynamic data for people used in the site
      people: [
        {
          id: 0,
          name: "Patrick",
          title: "UX/UI Designer and Social Media Strategist",
          image: "patrick.png",
          desc:
            "London, Ontario based UX/UI Designer and Social Media Strategist that focuses on simplifying modern interfaces to produce unqiue, engaging user experiences for responsive websites and mobile applications.",
          socials: [{ icon: "instagram", link: 'https://www.instagram.com/oattyonfilm/' }, { icon: "linkedin", link: 'https://www.linkedin.com/in/w-patrick-bradley/' }, { icon: "dribbble", link: 'https://dribbble.com/Oatrick' }],
        },

        {
          id: 1,
          name: "Austin",
          title: "Front-End Web Designer and Developer",
          image: "austin.png",
          desc:
            "London, Ontario based UX/UI Designer and Social Media Strategist that focuses on simplifying modern interfaces to produce unqiue, engaging user experiences for responsive websites and mobile applications.",
          socials: [{ icon: "github", link: 'https://github.com/AC59852' }, { icon: "linkedin", link: 'https://www.linkedin.com/in/austincaron/' }, { icon: "spotify", link: 'https://open.spotify.com/show/6h1nZhBfx39xc4QyJ4JvE4?si=Jw9L-TmdTbiS_bTAGodEsA' }],
        },
      ],

      // currentPerson contains the data of the person that was clicked
      currentPerson: {},
    };
  },

  methods: {
    // Set the current person as the person that was clicked
    changePerson(info) {
      this.currentPerson = info;
    },

    // Set the active person as the person that was clicked
    setActive(index) {
      this.activePerson = index;
    },
  },

  components: {
    // Register imported components
    AboutContent: AboutContent,
  },
};
</script>

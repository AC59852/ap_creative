<template>
  <section id="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" id="section0">
        <div class="homeTop">
          <h1>Austin Caron and Patrick Bradley Collaborative Portfolio.</h1>
          <img src="img/home_mockup.png" alt="image of phones">
        </div>
      </div>
      <div class="section" v-for="project in projects" :key="project.id" :id="'section' + project.id">
        <div :class="project.class">
          <h2>{{ project.title }}</h2>
          <p>{{ project.desc }}</p>
          <router-link to="/">View Website</router-link>
          <img :src="'img/' + project.image" :alt="'image of ' + project.title">
        </div>
      </div>
    </full-page>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      options: {
        onLeave: this.onLeave,
        normalScrollElements: '#topNav',
      },

      projects: [
        {id: 1, class: "project", title: "October's Very Own", desc: `creating a connection between the user's music-interests and the content being displayed`, image: 'themockup.png'},
      ]
    }
  },

  methods: {
    onLeave(origin, destination) {
        if(origin.index == 0 || origin.index == 2 && destination.index == 1) {
          document.querySelector("#topNav").classList.add("dark")
        } else { document.querySelector("#topNav").classList.remove("dark") }
    }
  },

  components: {
  },
};
</script>

<template>
  <section id="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" id="section0">
        <div class="homeTop">
          <h1>Austin Caron and Patrick Bradley Collaborative Portfolio.</h1>
          <img srcset="img/noshadow_mock.png 1279w, img/home_mockup.png 1280w" alt="image of phones">
        </div>
      </div>
      <div class="section" v-for="project in projects" :key="project.id" :id="'section' + project.id">
            <h2>{{ project.title }}</h2>
            <p>{{ project.desc }}</p>
            <router-link to="/">View Website</router-link>
            <img :src="'img/' + project.image" :alt="'image of ' + project.title">
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
        normalScrollElements: '#topNav, #popup, #popup .popupWrapper',
        navigation: true,
	      navigationPosition: 'right',
        paddingTop: '5em',
        fitToSection: true,
        bigSectionsDestination: 'top',
      },

      projects: [
        {id: 1, class: "project", title: "Spotify Redesign", desc: `creating a connection between the user's music-interests and the content displayed.`, image: 'themockup.png'},
        {id: 2, class: "project", title: "October's Very Own", desc: `a brand consistent mobile redesign for rapper, singer, song-writer, Drake's official clothing website.`, image: 'Mockup.png'},
      ]
    }
  },

  mounted() {
    let nav = document.querySelector("#topNav"),
      navAll = document.querySelectorAll("#fp-nav ul li a span");
    nav.classList.remove("dark");
          navAll.forEach(bubble => {
            bubble.classList.remove("test");
        })
  },

  methods: {
    onLeave(origin, destination) {

      let original = origin.index,
          newPlace = destination.index,
          nav = document.querySelector("#topNav"),
          navAll = document.querySelectorAll("#fp-nav ul li a span");


        if(original == 0 || original == 2 && newPlace == 1 || newPlace == 2) {
          nav.classList.add("dark");
          if(window.matchMedia('(display-mode: standalone)').matches && window.innerWidth <= 500) { console.log("dont fire") } else { nav.classList.add("hide") }
          navAll.forEach(bubble => {
            bubble.classList.add("test");
          })

        } else { 
          nav.classList.remove("dark");
          if(window.matchMedia('(display-mode: standalone)').matches && window.innerWidth <= 500) { console.log("dont fire") } else { nav.classList.remove("hide") }
          navAll.forEach(bubble => {
            bubble.classList.remove("test");
          })

        }
    },

  },

  components: {
  },
};
</script>

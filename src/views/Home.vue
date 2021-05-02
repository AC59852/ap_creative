<template>
  <section id="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" id="section0">
        <div class="homeTop">
          <h1>Austin Caron and Patrick Bradley Collaborative Portfolio.</h1>
          <img srcset="img/noshadow_mock.png" alt="image of phones" />
        </div>
      </div>
      <div
        class="section"
        v-for="project in projects"
        :key="project.id"
        :id="'section' + project.id"
      >
        <div class="sectionContent">
          <div class="sectionText">
            <h2>{{ project.title }}</h2>
            <p>{{ project.desc }}</p>
            <a :href="project.link" target="_blank" rel="noopener"
              >View Website</a
            >
          </div>
          <img
            :src="'img/' + project.image"
            :alt="'Preview image for ' + project.title"
          />
        </div>
      </div>
    </full-page>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  metaInfo() {
    return {
      title: this.meta.page,
      titleTemplate: "AP Creative  - %s",

      meta: [
        {
          name: "description",
          content: "This is a test description for home page",
        },
      ],
    };
  },

  data() {
    return {
      options: {
        onLeave: this.onLeave,
        normalScrollElements: "#topNav, #popup, #refresh",
        navigation: true,
        paddingTop: "5em",
        navigationPosition: "right",
        fitToSection: true,
        bigSectionsDestination: "top",
      },

      meta: {
        page: "Home",
      },

      projects: [
        {
          id: 1,
          class: "project",
          title: "Spotify Redesign",
          desc: `creating a connection between the user's music-interests and the content displayed.`,
          image: "themockup.png",
          link: "https://invis.io/U510TOGWVRTN#/450437298_Home",
        },
        {
          id: 2,
          class: "project",
          title: "October's Very Own",
          desc: `A brand consistent mobile redesign for rapper, singer, song-writer, Drake's official clothing website.`,
          image: "ovo.png",
          link: "https://ovo-redesign.web.app/",
        },
        {
          id: 3,
          class: "project",
          title: "Nintendo Fan Redesign",
          desc: `A fully modern desktop update of Nintendo's official website, focusing on user experience and brand consistency.`,
          image: "nintendo.png",
          link: "https://nintendo-app.web.app/",
        },
      ],
    };
  },

  mounted() {
    let nav = document.querySelector("#topNav"),
      navAll = document.querySelectorAll("#fp-nav ul li a span");
    nav.classList.remove("dark");
    navAll.forEach((bubble) => {
      bubble.classList.remove("black");
    });
  },

  methods: {
    onLeave(origin, destination) {
      let original = origin.index,
        newPlace = destination.index,
        nav = document.querySelector("#topNav"),
        header = document.querySelector("header"),
        projTitle = document.querySelectorAll(".sectionText h2"),
        navAll = document.querySelectorAll("#fp-nav ul li a span");

      if (original == 0 || (original == 2 && newPlace == 1 || newPlace == 2 || newPlace == 3)) {
        nav.classList.add("dark");
        if (
          window.matchMedia("(display-mode: standalone)").matches &&
          window.innerWidth <= 500
        ) {
          projTitle.forEach((title) => {
            title.style.marginTop = "3.5rem";
          });
        } else if (window.innerWidth <= 767) {
          header.classList.add("hide");
        }

        navAll.forEach((bubble) => {
          bubble.classList.add("black");
        });
      } else {
        nav.classList.remove("dark");
        if (
          window.matchMedia("(display-mode: standalone)").matches &&
          window.innerWidth <= 500
        ) {
          return;
        } else if (window.innerWidth <= 767) {
          header.classList.remove("hide");
        }

        navAll.forEach((bubble) => {
          bubble.classList.remove("black");
        });
      }
    },
  },
};
</script>

<template>
  <section id="about">
    <div class="aboutWrapper">
      <div class="aboutNames">
        <div @click="changePerson(person); setActive(index)" :class="{ 'active': activePerson === index }" v-for="(person, index) in people" :key="index">
          <h2>{{ person.name }}</h2>
        </div>
      </div>
      <AboutContent :currentPerson="currentPerson" class="aboutContent"/>
    </div>
  </section>
</template>

<script>
import AboutContent from '@/components/AboutContent.vue'
export default {

  mounted() {
    this.currentPerson = this.people[0]
  },

  data() {
    return { 
      activePerson: 0,

      people: [
        {id: 0, name: 'Patrick', title: 'UX/UI Designer and Social Media Strategist', image: 'placeholder.png', desc: 'London, Ontario based UX/UI Designer and Social Media Strategist that focuses on simplifying modern interfaces to produce unqiue, engaging user experiences for responsive websites and mobile applications.', socials: [ {icon: 'instagram'}, {icon: 'linkedin'} ]},

        {id: 1, name: 'Austin', title: 'Front-End Web Designer and Developer', img: 'placeholder.png', desc: 'London, Ontario based UX/UI Designer and Social Media Strategist that focuses on simplifying modern interfaces to produce unqiue, engaging user experiences for responsive websites and mobile applications.', socials: [ {icon: 'linkedin'}, {icon: 'instagram'} ]}
      ],
      currentPerson: {}
    }
  },

  methods: {
    changePerson(info) {
      this.currentPerson = info
    },

    setActive(index) {
      this.activePerson = index
    }
  },

  components: {
    AboutContent: AboutContent
  }
}
</script>
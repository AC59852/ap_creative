<template>
  <section id="about">
    <div class="aboutWrapper">
      <div class="aboutNames">
        <h2 @click="changePerson(person)" v-for="person in people" :key="person.id">{{ person.name }}</h2>
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
      people: [
        {id: 1, name: 'Patrick', title: 'UX/UI Designer and Social Media Strategist', image: 'placeholder.png', desc: 'London, Ontario based UX/UI Designer and Social Media Strategist that focuses on simplifying modern interfaces to produce unqiue, engaging user experiences for responsive websites and mobile applications.', socials: [ {icon: 'instagram'}, {icon: 'linkedin'} ]},

        {id: 2, name: 'Austin', title: 'Front-End Web Designer and Developer', img: 'placeholder.png', desc: 'London, Ontario based UX/UI Designer and Social Media Strategist that focuses on simplifying modern interfaces to produce unqiue, engaging user experiences for responsive websites and mobile applications.', socials: [ {icon: 'linkedin'}, {icon: 'instagram'} ]}
      ],
      currentPerson: {}
    }
  },

  methods: {
    changePerson(info) {
      this.currentPerson = info
    }
  },

  components: {
    AboutContent: AboutContent
  }
}
</script>
<template>
  <section id="contact">
    <h1 class="contTitle">{{ title }}</h1>
    <h2 class="contTag">{{ tagline }}</h2>
    <ContactForm :sent_message="sent_message" />
  </section>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  data() {
    return {
      title: "Need a website? Have a job opportunity? Just want to talk?",
      tagline: "Get in touch with us.",
      sent_message: `Thanks for reaching out! We'll respond to your message as soon as we can`,
    };
  },

  components: {
    ContactForm: ContactForm,
  },
};
</script>

<style></style>

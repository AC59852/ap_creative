<template>
  <section id="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" id="section1">
        <div class="fp-bg"></div>
        <div class="homeTop">
          <h1>Austin Caron and Patrick Bradley Collaborative Portfolio.</h1>
          <img src="img/home_mockup.png" alt="image of phones">
        </div>
      </div>
      <div class="section">
        Second section ...
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
        normalScrollElements: '#topNav',
      }
    }
  },
  components: {
  },
};
</script>

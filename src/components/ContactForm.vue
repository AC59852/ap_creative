<template>
  <div class="form">
    <form @submit.prevent="sendEmail">
      <div class="formFirst">
        <span>
          <label for="name">Your name</label>
          <input
            required
            aria-required="required*"
            v-model="name"
            name="name"
            id="formName"
            type="text"
            placeholder="required*"
            aria-placeholder="required*"
          />
        </span>
        <span>
          <label for="email">Your email</label>
          <input
            name="email"
            required
            aria-required="required*"
            v-model="email"
            id="formEmail"
            type="text"
            placeholder="required*"
            aria-placeholder="required*"
          />
        </span>
        <span>
          <img
            @click="slideForm()"
            src="img/arrow.png"
            alt="button for message"
          />
        </span>
      </div>
      <div class="formSecond">
        <span>
          <label for="message">Your Message</label>
          <textarea
            name="message"
            v-model="message"
            required
            aria-required="required*"
            id="formMsg"
            cols="30"
            rows="10"
            maxlength="260"
            placeholder="required*"
            aria-placeholder="required*"
          ></textarea>
          <input type="submit" value="Send" />
        </span>
      </div>
    </form>
    <div :class="{ sent: emailSent }" class="sentMsg">
      <p>{{ sent_message }}</p>
      <router-link to="/">Back</router-link>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  props: ["sent_message"],

  data() {
    return {
      emailSent: false,
      name: "",
      email: "",
      message: "",
      from_name: "AP Creative",
    };
  },

  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_4u1dwzc",
          "template_db6sbtz",
          e.target,
          "user_yM5mWxzyQShYcauGsoWXB",
          {
            name: this.name,
            email: this.email,
            message: this.message,
            from_name: this.from_name,
          },
          (this.emailSent = true)
        );

        document.querySelector(".contTitle").classList.add("hide");
        document.querySelector(".contTag").classList.add("hide");
        document.querySelector("form").classList.add("hide");
      } catch (err) {
        console.log(err);
      }
      (this.name = ""), (this.email = ""), (this.message = "");
    },

    slideForm() {
      let x = document.getElementsByName("name")[0],
        y = document.getElementsByName("email")[0],
        formFirst = document.querySelector(".formFirst"),
        formSec = document.querySelector(".formSecond");

      if (x.value.trim().length == 0 || y.value.trim().length == 0) {
        alert("Please fill in form");
      } else {
        console.log("success");
        formFirst.classList.add("slideLeft");
        formSec.classList.add("slideLeft");
      }
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <form @submit.prevent="sendEmail">
        <span class="formFirst">
            <span>
                <label for="name">Your name</label>
                <input required aria-required="required*" v-model="name" name="name" id="formName" type="text" placeholder="required*" aria-placeholder="required*">
            </span>
            <span>
                <label for="email">Your email</label>
                <input name="email" required aria-required="required*" v-model="email" id="formEmail" type="text" placeholder="required*" aria-placeholder="required*">
            </span>
            <img src="img/svgs/arrow.svg" alt="button for message">
        </span>
        <span class="formSecond">
            <label for="message">Your Message</label>
            <textarea name="message" v-model="message" required aria-required="required*" id="formMsg" cols="30" rows="10" maxlength="260" placeholder="required*" aria-placeholder="required*"></textarea>
            <input type="submit" value="Send">
        </span>
    </form>
    <div :class="{sent: emailSent}">
        <p>{{ sent_message }}</p>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    props: ['sent_message'],

    data() {
        return {
            emailSent: false,
            name: '',
            email: '',
            message: '',
            from_name: 'AP Creative'
        }
    },

    methods: {
        sendEmail(e) {
            try {
                emailjs.sendForm('service_4u1dwzc', 'template_db6sbtz', e.target, 'user_yM5mWxzyQShYcauGsoWXB', {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                    from_name: this.from_name
                }, this.emailSent = true)
            } catch(err) {
                console.log(err)
            } this.name = '', this.email = '', this.message = '';
        }
    }
}
</script>

<style>

</style>
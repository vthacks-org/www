<template>
  <div id="registration-section">
    <div class="gradient-seperator"></div>
    <div class="register-content">
      <div class="header center">Register Now</div>
      <div id="register-separator" class="seperator blue large"></div>
      <div class="info-term">
        <p>
          VTHacks accepts applicants on a first-come, first-serve basis.
          Applicants from all backgrounds are encouraged to apply.
        </p>
        <p>
          <span style="color: rgba(233, 233, 0, 1)">NOTE: </span>
          Applicants who are under the age of 18 are required to fill out the
          <a target="_blank" href="/files/minors-form.pdf"
            >VTHacks Minors Form</a
          >. This form must be submitted to the
          <a target="_blank" href="https://discord.gg/qRGP9RmPCc"
            >#minor-forms</a
          >
          channel in the VTHacks discord before the day of the event.
        </p>
      </div>
      <div class="register header center">
        <!-- <a
          href="https://register.vthacks.com/"
          target="_blank"
          class="register-link big blue eightbit-btn"
          >Sign Up
        </a> -->
        <p id="register-button" class="" @click="register">Register</p>
      </div>
      <div class="header center">I've Registered, What's Next?</div>
      <div id="register-separator" class="seperator blue large"></div>

      <div class="info-term">
        <ol>
          <li>
            Join the VTHacks
            <a target="_blank" href="https://discord.gg/qRGP9RmPCc"
              >Discord Server</a
            >
            for real-time updates from our organizers and to virtually navigate
            on the day of the event
          </li>
          <li>
            If you are under 18, complete and submit the
            <a target="_blank" href="/files/minors-form.pdf"
              >VTHacks Minors Form</a
            >
            to the
            <a target="_blank" href="https://discord.gg/qRGP9RmPCc"
              >#minor-forms</a
            >
            channel in the VTHacks Discord Server
          </li>
          <li>
            Follow us on
            <a target="_blank" href="https://twitter.com/VT_Hacks">Twitter</a>,
            <a target="_blank" href="https://www.instagram.com/vthacks"
              >Instagram</a
            >, and
            <a target="_blank" href="https://www.facebook.com/vthacks/"
              >Facebook</a
            >
            to receive hackathon updates and access to giveaways
          </li>
        </ol>
      </div>
    </div>
    <div class="gradient-seperator bottom reversed"></div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationSection',
  methods: {
    register() {
      window.open('https://register.vthacks.com')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
// @import '../styles/headers';
@import '../styles/vars';
// @import '../styles/eightbit-btn';
@import '../styles/info-term';

#registration-section {
  min-height: 30vh;
  overflow: hidden;
}

#register-separator {
  margin-bottom: 1px;
}

#register-button {
  color: #fbe32f;
  cursor: pointer;
}

.register-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 25px;
}

.header {
  font-family: $bnr22;
  color: #121212;
  font-size: 3rem;
}

.see-ya-there {
  // -webkit-text-stroke-color: darken($neon-pink, 30%);
  // color: $neon-pink;
  margin: 20px 55px 5px 55px;
  .term {
    font-family: $font-2P;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
  }
}

.info-term {
  font-family: $font-mono;
  font-size: 1.5rem;
  color: #fff;
}

.info-term a {
  font-family: $font-mono;
  font-size: 1.5rem;
  color: #fbe32f;
}

@media (max-width: 480px) {
  .see-ya-there {
    // -webkit-text-stroke-color: darken($neon-pink, 30%);
    // color: $neon-pink;
    margin: 15px 5px 5px 5px;
    .term {
      line-height: 25px;
    }
  }
}
</style>

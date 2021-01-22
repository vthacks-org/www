<template>
  <div id="registration-section" class="section">
    <div class="register-info">
      <h1 class="register-title">Register Now And Get Ready for VTHacks 8</h1>
      <div class="info-term register-content">
        <p>
          VTHacks swag will be given out on a first come, first serve basis, so
          make sure to register early.
        </p>
      </div>
      <div class="info-term register-content">
        <ol class="registration-list">
          <li>
            Register as an individual
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/1A_J-99egPZl8tFF_r00v1Y81zZYgAbvoOdlz7a2Y3aA/edit"
              rel="noreferrer"
              >here</a
            >
          </li>
          <li>
            Register your team
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/1A_J-99egPZl8tFF_r00v1Y81zZYgAbvoOdlz7a2Y3aA/edit"
              rel="noreferrer"
              >here</a
            >
            (if you don't have one yet check the
            <a target="_blank" href="https://discord.gg/qRGP9RmPCc"
              >#team-formation</a
            >
            channel in the VTHacks Discord Server)
          </li>
          <li>
            Join the VTHacks
            <a
              target="_blank"
              href="https://discord.gg/qRGP9RmPCc"
              rel="noreferrer"
              >Discord Server</a
            >
            for real-time updates from our organizers and to virtually navigate
            on the day of the event
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
@import '../sass/theme';

#registration-section {
  min-height: 30vh;
  overflow: hidden;
  font-family: 'VT323', monospace;
  padding: 40px;
}

#register-button {
  color: #fbe32f;
  cursor: pointer;
}

.register-title {
  padding-bottom: 10px;
  padding-left: 0;
}

.register-info {
  position: relative;
  font-family: 'VT323', monospace;
  color: #f89b6a;
  font-size: 2em;
  .register-title {
    font-size: 1.5em;
  }
  ::selection {
    background-color: $blue;
    color: white;
  }
}

.register-content {
  font-size: 0.75em;
  color: white;
  padding-bottom: 15px;
}

.registration-list {
  padding-left: 30px;
}

.see-ya-there {
  // -webkit-text-stroke-color: darken($neon-pink, 30%);
  // color: $neon-pink;
  margin: 20px 55px 5px 55px;
  .term {
    text-align: center;
    line-height: 35px;
    font-size: 14px;
  }
}

.info-term {
  word-wrap: normal;
  align-self: center;
  max-width: 50%;
  .tag {
    color: #48d247;
  }
  .neon-pink.tag {
    color: #fd00d5;
  }
  .vthacks-red.tag {
    color: #ec4150;
  }
}

.info-term a {
  font-family: $font-mono;
  font-size: 1.5rem;
  color: #329dd8;
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

  .info-term {
    font-size: 12px;
  }
}
</style>

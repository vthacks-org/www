<template>
  <div id="registration-section">
    <div class="extra-space"></div>
    <div class="section is-flex">
      <div id="padded-space" />
      <div id="registration-content" class="is-flex">
        <h1 class="title is-1 is-spaced has-text-centered">
          Register Now And Get Ready for VTHacks IX
        </h1>
        <h1 class="subtitle is-4 has-text-centered">
          VTHacks swag will be given out on a first come, first served basis, so
          make sure to register early.
        </h1>
        <div class="content">
          <ol type="1">
            <li class="is-size-4">
              Register as an individual
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLScMFUw1V9Kk_NhnJpvTcin60yU41dTdB41HKO5q4gonJLI5Ig/viewform?usp=sf_link"
                rel="noreferrer"
                >here</a
              >
            </li>
            <li class="is-size-4">
              Register your team
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeq9LoWCz-jYYpYiL3LYY7Ghh7PlQgU2Gbq1nhxDtINORUghQ/viewform?usp=sf_link"
                rel="noreferrer"
                >here</a
              >
              (if you don't have one yet check the
              <a
                target="_blank"
                href="https://discord.com/channels/929966430089252874/930210748884459530"
                >#team-formation</a
              >
              channel in the VTHacks Discord Server)
            </li>
            <li class="is-size-4">
              Join the VTHacks
              <a
                target="_blank"
                href="https://discord.gg/3erh2pce5f"
                rel="noreferrer"
                >Discord Server</a
              >
              for real-time updates from our organizers and to virtually
              navigate on the day of the event
            </li>
            <li class="is-size-4">
              Create an account on
              <a target="_blank" href="https://vthacks-ix.devpost.com/"
                >devpost</a
              >
              (where you will submit) <!-- and check out the
              <a href="https://live.vthacks.com/">livesite</a> for the schedule -->
            </li>
            <li class="is-size-4">
              Follow us on
              <a target="_blank" href="https://twitter.com/VT_Hacks">Twitter</a
              >,
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
    </div>
    <div class="extra-space"></div>
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

li {
  color: $night;
}

#padded-space {
  width: 30%;
}

#registration-content {
  justify-content: center;
  flex-direction: column;

  .title {
    color: $midnight;
  }
}

#registration-section {
  background-image: url('~assets/cloud_desktop.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 30% 0%;
  padding: 2vw;

  div {
    padding: 1vw;
  }
}

.subtitle {
  color: $night;
}

.extra-space {
  margin-top: 1vh;
  margin-bottom: 1vh;
}

@media (max-width: 1920px) {
  #registration-section {
    background-image: url('~assets/cloud_desktop.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 65% 0%;
    padding: 2vw;

    div {
      padding: 1vw;
    }

    .section {
      flex-direction: column;
    }
  }
}

@media (max-width: $min-width) {
  #registration-section {
    background-image: url('~assets/cloud_mobile.svg');
    background-repeat: no-repeat;
    background-position: 0% 0%;
    padding: 12vw 2vw;
  }

  #links {
    display: none;
  }

  .section {
    flex-direction: column;
  }

  .extra-space {
    margin-top: 20vh;
  }
}
</style>

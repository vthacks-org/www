<template>
  <div>
    <div id="registration-section" class="section is-flex">
      <LinksSection id="links" />
      <div id="registration-content" class="is-flex">
        <h1 class="title is-1 is-spaced">
          Register Now And Get Ready for VTHacks 8
        </h1>
        <h1 class="subtitle is-4">
          VTHacks swag will be given out on a first come, first serve basis, so
          make sure to register early.
        </h1>
        <div class="content">
          <ol type="1">
            <li class="is-size-4">
              Register as an individual
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/1A_J-99egPZl8tFF_r00v1Y81zZYgAbvoOdlz7a2Y3aA/edit"
                rel="noreferrer"
                >here</a
              >
            </li>
            <li class="is-size-4">
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
            <li class="is-size-4">
              Join the VTHacks
              <a
                target="_blank"
                href="https://discord.gg/qRGP9RmPCc"
                rel="noreferrer"
                >Discord Server</a
              >
              for real-time updates from our organizers and to virtually
              navigate on the day of the event
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
  </div>
</template>

<script>
import LinksSection from '~/components/LinksSection.vue'

export default {
  name: 'RegistrationSection',
  components: [LinksSection],
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

#registration-content {
  justify-content: flex-start;
  flex-direction: column;

  .title {
    color: $peach;
  }
}

#registration-section {
  div {
    padding: 1vw;
  }
}

#links-section {
  div {
    padding: 50vw;
  }
}

@media (max-width: $min-width) {
  #registration-section {
    flex-direction: column;
  }
}
</style>

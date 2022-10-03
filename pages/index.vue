<template>
  <div id="container">
    <div id="gradient" class="zBox"></div>
    <span id="nuxt-content" class="zBox">
      <SplashSection />
      <DetailsSection id="details" />
      <div id="blankSpace1"></div>
      <!-- <RegistrationSection /> -->
      <div id="registration-section" />
      <div id="blankSpace2"></div>
      <AboutSection />
      <TeamSection />
      <SponsorsSection />
      <FooterSection />
    </span>
  </div>
</template>

<script>
import SplashSection from '~/components/SplashSection.vue'
import DetailsSection from '~/components/DetailsSection.vue'
// import RegistrationSection from '~/components/RegistrationSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import SponsorsSection from '~/components/SponsorsSection.vue'
import FooterSection from '~/components/FooterSection.vue'
import TeamSection from '~/components/TeamSection.vue'

export default {
  name: 'HomePage',
  components: {
    SplashSection,
    DetailsSection,
    // RegistrationSection,
    AboutSection,
    SponsorsSection,
    TeamSection,
    FooterSection,
  },
  data() {
    return {
      day: [86, 52, 38, 1],
      sunsetI: [83, 40, 43, 1],
      sunsetF: [66, 13, 48, 1],
      night: [34, 13, 51, 1],
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
        { src: 'https://use.fontawesome.com/releases/v5.14.0/js/all.js' },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../sass/theme';

#container {
  position: relative;
}

#details {
  display: none;
  @media (max-width: $min-width) {
    display: block;
  }
}

#gradient {
  background: linear-gradient(
    0deg,
    // $night 10%,
    // $twilight 42%,
    #8a6e5e 50%,
    #3c4e55 90%
  );
  z-index: 1;
  height: fit-content;
}

#svgMountain {
  margin-top: 20%;
  position: absolute;
  z-index: -1;
}

#nuxt-content {
  z-index: 2;
}

.zBox {
  position: absolute;
  width: 100%;
}

.team-member > img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  // position: absolute;
  // clip: rect(0, 60px, 200px, 0);
}
</style>

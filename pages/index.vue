<template>
  <div id="homepage">
    <span>
      <Navigation></Navigation>
      <!-- <MLHTrustBadge></MLHTrustBadge> -->
      <SplashSection></SplashSection>
      <DetailsSection></DetailsSection>
      <PreRegistrationSection></PreRegistrationSection>
      <LinksSection></LinksSection>
      <RegistrationSection></RegistrationSection>
      <VolunteerSection></VolunteerSection>
      <AboutSection></AboutSection>
      <SponsorsSection></SponsorsSection>
      <FooterSection></FooterSection>
    </span>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
// import MLHTrustBadge from './MLHTrustBadge.vue';
import SplashSection from '../components/SplashSection.vue'
import DetailsSection from '../components/DetailsSection.vue'
import PreRegistrationSection from '../components/PreRegistrationSection.vue'
import RegistrationSection from '../components/RegistrationSection.vue'
import LinksSection from '../components/LinksSection.vue'
import AboutSection from '../components/AboutSection.vue'
import VolunteerSection from '../components/VolunteerSection.vue'
import SponsorsSection from '../components/SponsorsSection.vue'
import FooterSection from '../components/FooterSection.vue'

export default {
  name: 'HomePage',
  components: {
    Navigation,
    // MLHTrustBadge,
    SplashSection,
    DetailsSection,
    PreRegistrationSection,
    RegistrationSection,
    LinksSection,
    AboutSection,
    SponsorsSection,
    FooterSection,
    VolunteerSection,
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
#homepage {
  background: url('~assets/mount.svg') no-repeat,
    linear-gradient(
      0deg,
      rgba(28, 21, 87, 1) 0%,
      rgba(208, 124, 106, 1) 33%,
      rgba(226, 134, 107, 1) 61%,
      rgba(0, 174, 239, 1) 100%
    );
  position: absolute;
  top: 0;
  width: 100%;
}
</style>

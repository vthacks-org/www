<template>
  <div id="homepage">
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
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
#homepage {
  background-color: black;
  position: absolute;
  top: 0;
  width: 100%; /* to fix scroll bar offset */
}
</style>

<!-- This is a global, unscoped, change -->
<style lang="scss">
a {
  background-color: rgba(13, 12, 216, 0.7); // blue highlight
  text-decoration: none;
  color: white;
}
</style>

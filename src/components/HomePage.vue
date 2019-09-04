<template>
  <div id="homepage">
    <Navigation></Navigation>
    <MLHTrustBadge></MLHTrustBadge>
    <SplashSection></SplashSection>
    <DetailsSection></DetailsSection>
    <!-- <RegistrationSection></RegistrationSection> -->
    <!-- <VolunteerSection></VolunteerSection> -->
    <!-- <ScheduleSection></ScheduleSection> -->
    <AboutSection></AboutSection>
    <PreRegistrationSection></PreRegistrationSection>
    <SponsorsSection></SponsorsSection>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import MLHTrustBadge from './MLHTrustBadge.vue';
import SplashSection from './SplashSection.vue';
import DetailsSection from './DetailsSection.vue';
import PreRegistrationSection from './PreRegistrationSection.vue';
import RegistrationSection from './RegistrationSection.vue';
import LinksSection from './LinksSection.vue';
import AboutSection from './AboutSection.vue';
import VolunteerSection from './VolunteerSection.vue';
import ScheduleSection from './ScheduleSection.vue';
import MapSection from './MapSection.vue';
import SponsorsSection from './SponsorsSection.vue';
import FooterSection from './FooterSection.vue';

export default {
  name: 'HomePage',
  components: {
    Navigation,
    MLHTrustBadge,
    SplashSection,
    DetailsSection,
    PreRegistrationSection,
    RegistrationSection,
    LinksSection,
    AboutSection,
    ScheduleSection,
    MapSection,
    SponsorsSection,
    FooterSection,
    VolunteerSection,
  },
};
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

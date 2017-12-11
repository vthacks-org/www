<template>
  <div id="homepage">
    <Navigation></Navigation>
    <MLHTrustBadge></MLHTrustBadge>
    <SplashSection></SplashSection>
    <FirstSection></FirstSection>
    <AboutSection></AboutSection>
    <ScheduleSection></ScheduleSection>
    <MapSection></MapSection>
    <SponsorsSection></SponsorsSection>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import MLHTrustBadge from './MLHTrustBadge.vue';
import SplashSection from './SplashSection.vue';
import FirstSection from './FirstSection.vue';
import AboutSection from './AboutSection.vue';
import ScheduleSection from './ScheduleSection.vue';
import MapSection from './MapSection.vue';
import SponsorsSection from './SponsorsSection.vue';

export default {
  name: 'HomePage',
  components: {
    Navigation,
    MLHTrustBadge,
    SplashSection,
    FirstSection,
    AboutSection,
    ScheduleSection,
    MapSection,
    SponsorsSection,
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
}
</style>

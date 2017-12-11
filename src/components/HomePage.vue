<template>
  <div id="homepage">
    <MLHTrustBadge></MLHTrustBadge>
    <SplashSection></SplashSection>
    <FirstSection></FirstSection>
    <MapSection></MapSection>
    <AboutSection></AboutSection>
    <ScheduleSection></ScheduleSection>
  </div>
</template>

<script>
import MLHTrustBadge from './MLHTrustBadge.vue';
import SplashSection from './SplashSection.vue';
import FirstSection from './FirstSection.vue';
import AboutSection from './AboutSection.vue';
import ScheduleSection from './ScheduleSection.vue';
import MapSection from './MapSection.vue';

export default {
  name: 'HomePage',
  components: {
    MLHTrustBadge,
    SplashSection,
    FirstSection,
    AboutSection,
    ScheduleSection,
    MapSection,
  },
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped></style>

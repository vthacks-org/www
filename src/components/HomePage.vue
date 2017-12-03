<template>
  <div id="homepage">
    <MLHTrustBadge></MLHTrustBadge>
    <SplashSection></SplashSection>
    <AboutSection></AboutSection>
    <ScheduleSection></ScheduleSection>
    <MapSection></MapSection>
  </div>
</template>

<script>
import MLHTrustBadge from './MLHTrustBadge.vue';
import SplashSection from './SplashSection.vue';
import AboutSection from './AboutSection.vue';
import ScheduleSection from './ScheduleSection.vue';
import MapSection from './MapSection.vue';

export default {
  name: 'HomePage',
  components: {
    MLHTrustBadge,
    SplashSection,
    AboutSection,
    ScheduleSection,
    MapSection,
  },
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped></style>

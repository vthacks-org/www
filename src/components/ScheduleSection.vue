<template>
  <div id="schedule-section">
  </div>
</template>

<script>
export default {
  name: 'ScheduleSection',
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
#schedule-section {
  width: 100vw;
  height: 80vh;
  max-width: 100%; /* to fix scroll bar offset */
  min-height: 400px;
  background-color: #555;
}
</style>

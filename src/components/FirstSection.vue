<template>
  <div class="first-section">
    <img id="inverted-splash-grid" src="src/assets/splash-grid.png">
  </div>
</template>

<script>
export default {
  name: 'FirstSection',
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
.first-section {
  width: 100vw;
  height: 80vh;
  min-height: 400px;
  background-color: #111;
  overflow: hidden;
}

#inverted-splash-grid {
  width: 100%;
  transform: scaleY(-1) translateX(-50%);
  position: relative;
  min-width: 600px;
  left: 50%;
  top: -1px;
}
</style>

<template>
  <div class="splash-section">
    <div class="centered-content">
      <div>VTHacks V</div>
      <img class="vthacks-logo" src="src/assets/vthacks-logo.png">
      <div>The Hacking Begins</div>
      <div>February 2018</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplashSection',
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
.splash-section {
  width: 100vw;
  min-height: 400px;
  background-color: #333;
}

.centered-content {
  text-align: center;
  padding: 120px 20px;
  font-family: 'Press Start 2P', cursive;
  color: white;
  font-size: 2em;
  line-height: 1.5em;
}

.vthacks-logo {
  width: 300px;
  max-width: 60vw;
}
</style>

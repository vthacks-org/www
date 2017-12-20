<template>
  <div id="splash-section">
    <img id="splash-background" src="src/assets/splash-background.png">
    <img id="splash-grid" src="src/assets/splash-grid.png">
    <img id="splash-torg" src="src/assets/splash-torg.png">
    <img id="splash-pylons" src="src/assets/splash-pylons.png">
    <img id="splash-logo" src="src/assets/splash-logo.svg">
    <div id="splash-date">FEB 16-18. VIRGINIA TECH</div>
    <div id="splash-apply">Hack The Planet</div>
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
@import '../styles/colors';
$splash-min-width: 600px;

@font-face {
    font-family: EndlessBummer;
    src: url("../assets/ENDLESSBUMMER-Regular.otf") format("opentype");
}

#splash-background, #splash-grid, #splash-torg, #splash-pylons {
  position: absolute;
  width: 100%;
  min-width: $splash-min-width;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

#splash-logo {
  position: absolute;
  width: 23%;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);
}

#splash-date {
  position: absolute;
  color: white;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  font-family: monospace;
  border-left: 2px solid white;
  padding: 0 8px;
  border-right: 2px solid white;
  text-align: center;
}

#splash-apply {
  position: absolute;
  color: white;
  font-family: EndlessBummer, monospace;
  bottom: 20%;
  width: 100%;
  text-align: center;
  font-size: 64px;
}

#splash-section {
  position: relative;
  width: 100%;
  height: calc(100vw * 2 / 3);
  overflow: hidden;
  background-color: $background-splash;
  margin-top: 44px;
}

.centered-content {
  text-align: center;
  padding: 120px 20px;
  font-family: 'Press Start 2P', monospace;
  color: $text-primary;
  font-size: 2em;
  line-height: 1.5em;
}

@media (max-width: $splash-min-width) {
  #splash-section {
    height: calc(600px * 2 / 3);
  }

  #splash-logo {
    width: 130px;
    top: 30px;
  }

  #splash-apply {
    font-size: 48px;
  }
}

@media (max-width: 480px) {
  #splash-section {
    margin-top: 0;
  }

  #splash-date {
    top: 8px;
  }

  #splash-logo {
    width: 130px;
    top: 36px;
  }
}
</style>

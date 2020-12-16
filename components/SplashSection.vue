<template>
  <section id="splash-section">
    <div id="splash-container">
      <img id="splash-logo" src="~assets/logo.svg" alt="VTHacks logo" />
      <div id="splash-apply">
        <a id="registration-link" href="#">
          <!-- <div>Hack the Planet</div> -->
          <!-- <a href="https://vthacksvi.devpost.com/" target="_blank" class="register-link big neon-pink eightbit-btn">Devpost &gt;</a> -->
          <!-- <a href="http://tinyurl.com/vthacks-slack/" target="_blank" class="register-link big neon-pink eightbit-btn">Slack &gt;</a> -->
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SplashSection',
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../sass/theme';

#splash-logo {
  position: absolute;
  width: 21%;
  left: 50%;
  top: 6%;
  transform: translateX(-50%);
}

#splash-apply {
  position: absolute;
  color: white;
  font-family: $font-vt232;
  letter-spacing: 8px;
  top: 66%;
  width: 100%;
  text-align: center;
  font-size: 2em;
  margin-bottom: 16px;
  #registration-link {
    background-color: transparent;
  }
  #apply-image {
    width: 300px;

    &:hover {
      width: 310px;
    }
  }
}

#splash-section {
  position: relative;
  overflow: hidden;
  margin-top: 44px;
  @media (min-width: 1200px) {
    max-height: calc(100vw * 2 / 3 * 0.62 + 200px);
  }
}

#splash-section,
#splash-container {
  width: 100%;
  height: 65vw;
}

#splash-container {
  position: absolute;
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
  #splash-section,
  #splash-container {
    height: calc(600px * 2 / 3);
  }

  #splash-logo {
    width: 130px;
    top: 30px;
  }

  #splash-apply {
    #apply-image {
      width: 230px;
    }
  }
}

@media (max-width: 480px) {
  #splash-section {
    margin-top: 0;
  }

  #splash-logo {
    width: 110px;
    top: 40px;
  }

  #splash-apply #registration-link {
    font-size: 12px;
  }
}
</style>

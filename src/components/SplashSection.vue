<template>
  <div id="splash-section">
    <div id="splash-container">
      <img id="splash-combined" src="../assets/composite_splash.png">
      <img id="splash-logo" src="../assets/base-logo.png">
      <div id="splash-date">FEB 15-17. VIRGINIA TECH</div>
      <div id="splash-apply">
        <a id="registration-link" href="#">
          <!-- <div>Hack the Planet</div> -->
          <a href="https://vthacksvi.devpost.com/" target="_blank" class="register-link big neon-pink eightbit-btn">Devpost &gt;</a>
          <a href="http://tinyurl.com/vthacks-slack/" target="_blank" class="register-link big neon-pink eightbit-btn">Slack &gt;</a>
        </a>
      </div>
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
@import '../styles/colors';
@import '../styles/vars';
@import '../styles/eightbit-btn';

@font-face {
    font-family: EndlessBummer;
    src: url("../assets/ENDLESSBUMMER-Regular.otf") format("opentype");
}

#splash-combined {
  position: absolute;
  width: 100%;
  min-width: $splash-min-width;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

#splash-logo {
  position: absolute;
  width: 21%;
  left: 50%;
  top: 6%;
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
  font-size: 18px;
  line-height: 18px;
}

#splash-apply {
  position: absolute;
  color: white;
  font-family: EndlessBummer, monospace;
  top: 64%;
  width: 100%;
  text-align: center;
  font-size: 58px;
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
  background-color: $background-splash;
  margin-top: 44px;
  @media (min-width: 1200px) {
    max-height: calc(100vw * 2 / 3 * 0.62 + 200px);
  }
}

#splash-section, #splash-container {
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
  #splash-section, #splash-container {
    height: calc(600px * 2 / 3);
  }

  #splash-logo {
    width: 130px;
    top: 30px;
  }

  #splash-date {
    font-size: 10px;
  }

  #splash-apply {
    font-size: 48px;
    #apply-image {
      width: 230px;
    }
  }
}

@media (max-width: 480px) {
  #splash-section {
    margin-top: 0;
  }

  #splash-date {
    top: 12px;
  }

  #splash-logo {
    width: 110px;
    top: 40px;
  }

  #splash-apply #registration-link .eightbit-btn {
    font-size: 12px;
  }
}
</style>

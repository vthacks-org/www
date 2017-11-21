<template>
  <div class="about-section">
    <div class="vth-logo-term">
      <img src="src/assets/vthacks-logo.png">
      <div class="specs">
        <div><span>OS:</span> VTHacks x86_64</div>
        <div><span>Model:</span> SURGE 5TH EDITION</div>
      </div>
    </div>
    <div>
      <div class="about-title">> About/FAQ:</div>
      <div class="about-content">
        <div>- Hello, world!</div>
        <div>- Hello, world!</div>
        <div>- Hello, world!</div>
        <div>- Hello, world!</div>
      </div>
    </div>
    <div class="scanlines"></div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import "../styles/colors";

.about-section {
  position: relative;
  background-color: $vth-term-background;
  padding: 40px;
  font-family: 'VT323', monospace;
  color: $vth-term-color;
  font-size: 2em;
  .about-title {
    font-size: 1.5em;
  }
  ::selection {
    background-color: $vth-blue;
    color: white;
  }
}
.scanlines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0),
    rgba(255,255,255,0) 50%,
    rgba(0,0,0,0.2) 70%,
    rgba(0,0,0,0.6));
  background-size: 100% 0.3rem;
  pointer-events: none;
}

.vth-logo-term {
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
  }
  .specs {
    margin-left: 8px;
    font-size: 0.6em;
    color: white;
    span {
      color: $vth-term-color;
    }
  }
  @media(max-width: 720px) {
    float: none;
    width: fit-content;
    width: intrinsic;
    margin: 0 auto;
  }
}
</style>

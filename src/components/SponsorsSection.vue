<template>
  <div id="sponsors-section">
    <div class="gradient-seperator"></div>
    <div style="margin: 0 auto; justify-content:center">
      <h6 class="supertitle"> Our amazing </h6>
      <h1 class="futuristic blue"> Sponsors </h1>
    </div>
    <div class="seperator large blue"></div>

    <div class="info-term">
      <p>$> <span style="color: #48d247;">INFO: </span> we are working with some great sponsors to bring VTHacks V to life. </p>
      <p>$> If you’re interested in being one of them, send us an email at <a href="mailto:sponsorship@vthacks.com">sponsorship@vthacks.com</a> </p>
    </div>
    <div class="gradient-seperator reversed"></div>
  </div>
</template>

<script>
export default {
  name: 'SponsorsSection',
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../styles/headers';
@import '../styles/vars';
@import '../styles/colors';

#sponsors-section {
  width: 100%;
  min-height: 300px;
  background-color: #111;
  display: flex;
  flex-direction: column;
}

.info-term {
  .tag {
    color: blue;
  }
  font-family: $font-VT232;
  color: white;
  word-wrap: normal;
  align-self: center;
  padding: 15px;
}

</style>

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

    <div class="sponsor-logos">
      <div class="sponsor-tier big center">
        <img v-lazy="microstrategy"/>
      </div>

      <div class="sponsor-tier medium center">
        <img v-lazy="jbHunt"/>
      </div>
    </div>

    <div class="gradient-seperator bottom reversed"></div>
  </div>
</template>

<script>
export default {
  name: 'SponsorsSection',
  data() {
    return {
      jbHunt: '/src/assets/sponsors/JBHunt.jpg',
      microstrategy: '/src/assets/sponsors/MicroStrategy.png',
    };
  },
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
  height: auto;
  background-color: #111;
  display: flex;
  flex-direction: column;
}

.sponsor-logos {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.sponsor-tier{
  align-self: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 25px;

  img {
    width: auto;
    height: auto;
    max-width: 95vw;
  }

  &.big{
    img {
      padding: 10px;
      max-height: 13vh;
    }
  }
  &.medium{
    img {
      max-height: 11vh;
      padding: 5px;
    }
  }
  &.small{
    max-height: 15vh;
    width: auto;
    img {
      height: auto;
      width: 20%;
    }
  }
  &.center{
    justify-content: center;
  }

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

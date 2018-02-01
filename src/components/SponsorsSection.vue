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
      <div class="sponsor-tier big center" >
          <img v-for="image in sponsors.big" v-lazy="image"/>
      </div>

      <div class="sponsor-tier medium center">
          <img v-for="image in sponsors.medium" v-lazy="image"/>
      </div>

      <div class="sponsor-tier small center">
          <img v-for="image in sponsors.smallDark" class="dark logo" v-lazy="image"/>
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
      sponsors: {
        big: [
          '/static/sponsors/MicroStrategy.png',
        ],
        medium: [
          '/static/sponsors/JBHunt.svg',
          '/static/sponsors/WillowTree.svg',
          '/static/sponsors/CapitalOneWhite.png',
        ],
        smallDark: [
          '/static/sponsors/WolframLanguageLogo.png',
        ],
      },
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
  background-color: #010B13;
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
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 25px;
  display: flex;

  img {
      margin: 20px;
      min-height: 7vh;
  }

  &.big > img {
      max-height: 13vh;
      min-width: 400px;
  }
  &.medium > img {
      max-height: 10vh;
      min-width: 250px;
  }
  &.small > img {
      max-height: 8vh;
      min-width: 125px;
  }
  &.center{
    justify-content: center;
  }

  .dark.logo {
    background-color: #ECEFF1;
    padding: 10px;
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

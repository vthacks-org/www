<template>
  <div id="sponsors-section">
    <div class="gradient-seperator"></div>
    <div style="margin: 0 auto; justify-content:center">
      <h6 class="supertitle"> Our amazing </h6>
      <h1 class="futuristic blue"> Sponsors </h1>
    </div>
    <div class="seperator large blue"></div>

    <div class="sponsor-logos">
      <div class="sponsor-tier big center" >
          <img v-for="image in sponsors.big" v-lazy="image"/>
      </div>

      <div class="sponsor-tier medium center">
          <img v-for="image in sponsors.medium" v-lazy="image"/>
          <img class="wolfram" v-lazy="sponsors.wolfram"/>
      </div>

      <div class="sponsor-tier small center">
      </div>
    </div>

    <div class="gradient-seperator bottom reversed"></div>

    <div class="sponsor-logos">
      <div style="margin: 0 auto; justify-content:center">
        <h6 class="supertitle pink"> and Our awesome </h6>
        <h3 class="futuristic pink"> Caterers </h3>
      </div>
      <div class="seperator large pink"></div>


      <div class="sponsor-tier catering center">
          <img v-for="image in food.square" class="square" v-lazy="image"/>
          <img v-for="image in food.rectangular" class="rectangular" v-lazy="image"/>
      </div>
    </div>
    <div class="gradient-seperator bottom"></div>
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
          '/static/sponsors/Eastman.png',
          '/static/sponsors/CyberRange.svg',
        ],
        wolfram: '/static/sponsors/WolframLanguageLogo.png',
      },
      food: {
        rectangular: [
          '/static/sponsors/Campus Cookies.png',
        ],
        square: [
          '/static/sponsors/Carol Lee.jpg',
          '/static/sponsors/Chinese Kitchen.png',
          '/static/sponsors/Marco and Lucas.png',
          '/static/sponsors/NDBS.png',
          '/static/sponsors/Zeppoli_s.jpg',
          '/static/sponsors/IdegoCoffee.svg',
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
  max-width: 1200px;

  img {
      max-width: 80%;
      margin: 20px;
      min-height: 7vh;
  }

  &.catering {

    & > .square {
      max-height: 15vh;
    }
    & > .rectangular {
      max-height: 10vh;
      height: auto;
    }
  }

  &.big > img {
      max-height: 13vh;
      min-width: 350px;
  }
  &.medium > img {
      max-height: 10vh;
      min-width: 250px;
      max-width: 300px;
      object-fit: contain;
  }
  &.medium > .wolfram {
    background-color: #ECEFF1;
    padding: 5px;
    min-width: 150px;
    max-width: 200px;
  }
  &.small > img {
      max-height: 8vh;
      min-width: 125px;
  }

  /* All Mobile Sizes (devices and browser) */
  @media only screen and (max-width: 480px) {
    img {
      margin: 15px;
    }

    &.medium > img {
        max-height: 6vh;
        min-width: 130px;
    }
    &.small > img {
        max-height: 6vh;
        max-width: 70px;
        margin: 5px;
    }
  }

  &.center{
    justify-content: center;
    align-items: center;
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

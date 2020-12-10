<template>
  <div id="sponsors-section">
    <div class="gradient-seperator"></div>
    <div style="margin: 0 auto; justify-content: center">
      <h6 class="supertitle">Our amazing</h6>
      <h1 class="futuristic blue">Sponsors</h1>
    </div>

    <!-- <div class="sponsor-logos">
      <div class="sponsor-tier big center">
        <div v-for="sponsor in sponsors.big" :key="sponsor">
          <a :href="sponsor.url" target="_blank">
            <img v-lazy="sponsor.img" class="big" style />
          </a>
        </div>
      </div> -->

    <div class="gradient-seperator bottom reversed"></div>

    <!-- <div class="sponsor-logos">
      <div style="margin: 0 auto; justify-content:center">
        <h6 class="supertitle pink"> and Our awesome </h6>
        <h3 class="futuristic pink"> Caterers </h3>
      </div>
      <div class="seperator large pink"></div>

      <div class="sponsor-tier catering center">
        <div v-for="sponsor in food.square">
          <a :href="sponsor.url" target="_blank"><img class="square" v-lazy="sponsor.img" /></a>
        </div>
        <div v-for="sponsor in food.rectangular">
          <a :href="sponsor.url" target="_blank"><img class="rectangular" v-lazy="sponsor.img" /></a>
        </div>
      </div>
    </div>-->
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
          {
            img: '',
            url: '',
          },
        ],
        medium: [],
      },
      food: {
        rectangular: [],
        square: [],
      },
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../styles/vars';
@import '../styles/colors';

#sponsors-section {
  background: rgba(28, 21, 87, 1);
  width: 100%;
  display: flex;
  flex-direction: column;
}

.sponsor-logos {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.sponsor-tier {
  align-self: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 25px;
  display: flex;
  max-width: 1200px;

  a {
    background: none;
  }

  img {
    max-width: 80%;
    margin: 20px;
    min-height: 7vh;
  }

  &.catering {
    img.square {
      max-height: 15vh;
    }
    img.rectangular {
      max-height: 10vh;
      height: auto;
    }
  }

  .fix-width {
    width: min-content;
  }

  img.big {
    max-width: 40%;
    display: block;
    margin: auto;
  }
  img.medium {
    max-height: 10vh;
    min-width: 250px;
    max-width: 300px;
    object-fit: contain;
  }
  .wolfram {
    background-color: #eceff1;
    padding: 5px;
    min-width: 150px;
    max-width: 200px;
  }
  .white-bg {
    background-color: #eceff1;
  }
  img.small {
    max-height: 8vh;
    min-width: 125px;
  }

  /* All Mobile Sizes (devices and browser) */
  @media only screen and (max-width: 480px) {
    img {
      margin: 15px;
    }

    img.medium {
      max-height: 6vh;
      min-width: 130px;
    }
    img.small {
      max-height: 6vh;
      max-width: 70px;
      margin: 5px;
    }
  }

  &.center {
    justify-content: center;
    align-items: center;
  }
}

.info-term {
  word-wrap: normal;
  align-self: center;
  padding: 15px;
}
</style>

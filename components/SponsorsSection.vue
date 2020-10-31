<template>
  <div id="sponsors-section">
    <div class="gradient-seperator"></div>
    <div style="margin: 0 auto; justify-content: center">
      <h6 class="supertitle">Our amazing</h6>
      <h1 class="futuristic blue">Sponsors</h1>
    </div>
    <div class="seperator large blue"></div>

    <div class="sponsor-logos">
      <div class="sponsor-tier big center">
        <div v-for="sponsor in sponsors.big" :key="sponsor">
          <a :href="sponsor.url" target="_blank">
            <img v-lazy="sponsor.img" class="big" style />
          </a>
        </div>
      </div>

      <div class="sponsor-tier medium center">
        <!--<div v-for="sponsor in sponsors.big">
          <a :href="sponsor.url" target="_blank">
            <img class="big" v-lazy="sponsor.img" />
          </a>
        </div>-->
        <div
          v-for="sponsor in sponsors.whiteBg"
          :key="sponsor"
          class="fix-width"
        >
          <a :href="sponsor.url" target="_blank">
            <img v-lazy="sponsor.img" class="big white-bg" />
          </a>
        </div>
        <div v-for="sponsor in sponsors.medium" :key="sponsor">
          <a :href="sponsor.url" target="_blank">
            <img v-lazy="sponsor.img" class="medium" />
          </a>
        </div>
        <!-- <a :href="sponsors.wolfram.url" target="_blank"><img class="medium wolfram" v-lazy="sponsors.wolfram.img"/></a> -->
      </div>

      <div class="sponsor-tier small center"></div>
    </div>

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
            img: '/static/sponsors/Costar.png',
            url: 'https://www.costargroup.com/careers/technology-opportunities',
          },
        ],
        medium: [
          {
            img: '/static/sponsors/MicroStrategy.png',
            url: 'https://www.microstrategy.com/us/company/careers',
          },
          {
            img: '/static/sponsors/CarMax.svg',
            url: 'https://jobs.carmax.com/',
          },
          {
            img: '/static/sponsors/GoogleCloud.png',
            url: 'https://cloud.google.com/',
          },
          {
            img: '/static/sponsors/StickerMule.svg',
            url: 'http://hackp.ac/mlh-stickermule-hackathons',
          },
          {
            img: '/static/sponsors/JBHunt.svg',
            url: 'https://www.jbhunt.com/',
          },
          {
            img: '/static/sponsors/CapitalOneWhite.png',
            url: 'https://campus.capitalone.com/',
          },
          {
            img: '/static/sponsors/ripplematch.png',
            url: 'https://ripplematch.com/index?r=WQ2dGY',
          },
        ],
      },
      food: {
        rectangular: [
          {
            img: '/static/sponsors/Campus Cookies.png',
            url: 'https://www.campuscookie.com/',
          },
          {
            img: '/static/sponsors/soulvaki.png',
            url: 'https://eatsouvlaki.com/',
          },
        ],
        square: [
          {
            img: '/static/sponsors/Carol Lee.jpg',
            url: 'https://www.carolleedonuts.com/',
          },
          {
            img: '/static/sponsors/Chinese Kitchen.png',
            url: 'http://www.chinesekitchenblacksburg.com/',
          },
          {
            img: '/static/sponsors/moes.png',
            url: 'https://www.moes.com/',
          },
          {
            img: '/static/sponsors/bennys.png',
            url: 'https://www.bennysva.com/',
          },
          {
            img: '/static/sponsors/Zeppoli_s.jpg',
            url: 'http://zeppolis.com/',
          },
          {
            img: '/static/sponsors/IdegoCoffee.svg',
            url: 'https://www.idegocoffee.com/',
          },
        ],
      },
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../styles/headers';
@import '../styles/vars';
@import '../styles/colors';

#sponsors-section {
  width: 100%;
  background-color: #010b13;
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

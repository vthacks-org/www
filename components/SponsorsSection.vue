<template>
  <section id="sponsors-section" class="section">
    <div class="content has-text-centered">
      <h1 class="title is-1">Thanks to our past and current sponsors</h1>
    </div>
    <div id="sponsor-container" class="tile">
      <div
        v-for="sponsor of platSponsors"
        :key="sponsor.alt"
        class="flex-container centered"
      >
        <div class="tile is-child is-flex flex-center">
          <figure class="image">
            <img class="sponsor-img" :src="sponsor.src" :alt="sponsor.alt" />
          </figure>
          <!-- <a href="" target="_blank">
            </a> -->
        </div>
      </div>
    </div>
    <div id="sponsor-container" class="tile">
      <div
        v-for="sponsor of sponsors"
        :key="sponsor.alt"
        class="flex-container centered"
      >
        <div class="tile is-child is-flex flex-center">
          <figure class="image">
            <img class="sponsor-img" :src="sponsor.src" :alt="sponsor.alt" />
          </figure>
          <!-- <a href="" target="_blank">
            </a> -->
        </div>
      </div>
    </div>
    <div id="sponsor-container" class="tile">
      <div
        v-for="sponsor of pastSponsors"
        :key="sponsor.alt"
        class="flex-container centered"
      >
        <div class="tile is-child is-flex flex-center">
          <figure class="image">
            <img class="sponsor-img" :src="sponsor.src" :alt="sponsor.alt" />
          </figure>
          <!-- <a href="" target="_blank">
            </a> -->
        </div>
      </div>
    </div>

    <!-- <div class="tile is-ancestor">
      <div class="tile is-child is-flex flex-center">
        <figure class="image">
          <img
            class="sponsor-img"
            alt="echoAR logo"
            src="~assets/sponsors/echoAR.png"
          />
        </figure>
        <a href="" target="_blank"> </a>
      </div>
      <div class="tile is-child is-flex flex-center">
        <figure class="image">
          <img
            class="sponsor-img"
            alt="balsamiq logo"
            src="~assets/sponsors/balsamiq.svg"
          />
        </figure>
        <a href="" target="_blank"> </a>
      </div>
      <div class="tile is-child is-flex flex-center">
        <figure class="image">
          <img
            class="sponsor-img"
            alt="stickermule logo"
            src="~assets/sponsors/sticker-mule-logo-dark.png"
          />
        </figure>
        <a href="" target="_blank"> </a>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  name: 'SponsorsSection',
  props: {
    platSponsors: {
      type: Array,
      default() {
        return [
          {
            id: 0,
            src: '/sponsors/mantech-logo.png',
            alt: 'ManTech',
          },
        ]
      },
    },
    sponsors: {
      type: Array,
      default() {
        return [
          {
            id: 0,
            src: '/sponsors/mlh-white.png',
            alt: 'Major League Hacking Logo',
          },
          {
            id: 1,
            src: '/sponsors/Peraton-Full-Color.png',
            alt: 'Peraton Logo',
          },
          {
            id: 2,
            src: '/sponsors/vtcs.png',
            alt: 'Virginia Tech Computer Science Department Logo',
          },
        ]
      },
    },
    pastSponsors: {
      type: Array,
      default() {
        return [
          {
            id: 0,
            src: '/sponsors/capitalone.svg',
            alt: 'Capital One Logo',
          },
          {
            id: 1,
            alt: 'echoAR logo',
            src: '/sponsors/echoAR.png',
          },
          {
            id: 2,
            alt: 'balsamiq logo',
            src: '/sponsors/balsamiq.svg',
          },
          {
            id: 3,
            alt: 'stickermule logo',
            src: '/sponsors/sticker-mule-logo-dark.png',
          },
          {
            id: 5,
            alt: 'MicroStrategy logo',
            src: '/sponsors/MicroStrategy.png',
          },
          {
            id: 6,
            alt: 'Carmax logo',
            src: '/sponsors/CarMax.svg',
          },
          {
            id: 7,
            alt: 'Google Cloud logo',
            src: '/sponsors/GoogleCloud.png',
          },
          {
            id: 8,
            alt: 'JB Hunt logo',
            src: '/sponsors/JBHunt.svg',
          },
          {
            id: 9,
            alt: 'RippleMatch logo',
            src: '/sponsors/ripplematch.png',
          },
          {
            id: 10,
            alt: 'WillowTree logo',
            src: '/sponsors/WillowTree.svg',
          },
          {
            id: 11,
            alt: 'Eastman logo',
            src: '/sponsors/Eastman.png',
          },
          {
            id: 12,
            alt: 'Virginia Cyber Range logo',
            src: '/sponsors/CyberRange.svg',
          },
          {
            id: 13,
            alt: 'Wolfram logo',
            src: '/sponsors/WolframLanguageLogo.png',
          },
        ]
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/theme';

#sponsors-section {
  z-index: -1;
  padding-top: 3vw;
  background: $midnight;
  width: 100%;
  div {
    h1 {
      // display: none; // Remove to show sponsor text
      color: $peach;
      font-family: $bnr22;
    }
  }
}
#sponsor-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.flex-container {
  display: flex;
}

.centered {
  align-self: center;
}

.sponsor-img {
  // display: none; // Remove to show sponsor images
  height: auto;
  max-width: 300px;
  &.big {
    max-width: 600px;
    min-width: 400px;
  }
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.is-child {
  padding: 30px;
}

@media (max-width: $min-width) {
  #sponsors-section {
    z-index: -1;
    margin-top: 0%;
    background: $midnight;
    width: 100%;
    div {
      h1 {
        color: $peach;
        font-family: $bnr22;
      }
    }
  }
}
</style>

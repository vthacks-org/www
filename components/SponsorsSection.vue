<!-- <html> -->
<template>
  <section id="sponsors-section">
    <div class="content has-text-centered">
      <h1 class="sponserTitle">Thank You To Our Fall 2022 Sponsors</h1>
    </div>
    <div class="content has-text-centered">
      <p>
        Interested in sponsoring? Check out our
        <a href="https://vthacks.com/Prospectus.pdf" target="_blank"
          >sponsorship packet</a
        >
        and contact us at
        <a href="mailto:hacker@vthacks.com">hacker@vthacks.com</a>
      </p>
    </div>
    <div id="sponsor-container" class="tile">
      <div
        v-for="sponsor of platSponsors"
        :key="sponsor.alt"
        class="flex-container centered"
      >
        <div class="tile is-child is-flex flex-center">
          <figure class="image">
            <a :href="sponsor.href" :target="'_blank'">
              <img
                :class="[sponsor.big ? 'sponsorBig' : 'sponsorImg']"
                :src="sponsor.src"
                :alt="sponsor.alt"
              />
            </a>
          </figure>
          <!-- <a href="" target="_blank">
            </a> -->
        </div>
      </div>
    </div>
    <div
      v-for="(sponsorList, index) of sponsors"
      id="sponsor-container"
      :key="index"
      class="tile"
    >
      <div
        v-for="sponsor of sponsorList"
        :key="sponsor.alt"
        class="flex-container centered"
      >
        <div class="tile is-child is-flex flex-center">
          <figure class="image">
            <a :href="sponsor.href" :target="'_blank'">
              <img
                :class="[sponsor.big ? 'sponsorBig' : 'sponsorImg']"
                :src="sponsor.src"
                :alt="sponsor.alt"
              />
            </a>
          </figure>
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
            src: '/sponsors/capgeminiLogo.png',
            alt: 'Capgemini',
            big: true,
            href: 'https://www.capgemini.com/us-en/',
          },
        ]
      },
    },
    sponsors: {
      type: Array,
      default() {
        return [
          [
            {
              id: 0,
              src: '/sponsors/Peraton-Full-Color.png',
              alt: 'Peraton Logo',
              big: true,
              href: 'https://www.peraton.com/',
            },
          ],
          [
            {
              id: 1,
              src: '/sponsors/JBHunt.svg',
              alt: 'JBHunt Logo',
              big: false,
              href: 'https://www.jbhunt.com/',
            },
            {
              id: 2,
              src: '/sponsors/eyLogo.png',
              alt: 'EY Logo',
              big: false,
              href: 'https://www.ey.com/en_us',
            },
            // {
            //   id: 1,
            //   src: '/sponsors/vtcs.png',
            //   alt: 'Virginia Tech Computer Science Department Logo',
            // },
            // {
            //   id: 2,
            //   src: '/sponsors/capitalone.svg',
            //   alt: 'Captial One Logo',
            // },
          ],
          [
            {
              id: 0,
              src: '/sponsors/ciphertechLogo.png',
              alt: 'Ciphertech Logo',
              big: true,
              href: 'https://www.ciphertechsolutions.com/',
            },
            {
              id: 1,
              src: '/sponsors/standoutLogo.png',
              alt: 'Standout Logo',
              big: false,
              href: 'http://hackp.ac/mlh-StandOutStickers-hackathons',
            },
            {
              id: 2,
              src: '/sponsors/mlh-white.png',
              alt: 'Major League Hacking Logo',
              big: false,
              href: 'https://mlh.io/',
            },
          ],
        ]
      },
    },
    pastSponsors: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/theme';

.sponserTitle {
  color: white;
  font-size: 3rem;
  font-weight: 900;
}

#sponsors-section {
  z-index: -1;
  padding-top: 3vw;
  width: 100%;
  overflow: hidden;
  // background-color: $background;
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

.sponsorImg {
  // display: none; // Remove to show sponsor images
  height: auto;
  max-width: 300px;

  &.big {
    max-width: 600px;
    min-width: 400px;
  }
}

.sponsorBig {
  max-width: 600px;
  min-width: 400px;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.is-child {
  padding: 30px;
}
</style>

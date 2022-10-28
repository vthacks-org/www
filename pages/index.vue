<template>
  <div id="container">
    <div id="gradient" class="zBox"></div>
    <span id="nuxt-content" class="zBox">
      <SplashSection class="forward" />
      <AboutSection />
      <FAQ />
      <img class="spiral" src="~/static/spiral.svg" />
      <div class="forward">
        <SponsorsSection />
      </div>
      <div id="sponsors" class="forward">
        <TeamSection />
      </div>
      <img id="bridge" class="bridge" src="~/static/footer/bridge.svg" />
      <FooterSection />
    </span>
  </div>
</template>

<script>
import FAQ from '../components/FAQ.vue'
import SplashSection from '~/components/SplashSection.vue'
// import RegistrationSection from '~/components/RegistrationSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import SponsorsSection from '~/components/SponsorsSection.vue'
import FooterSection from '~/components/FooterSection.vue'
import TeamSection from '~/components/TeamSection.vue'

export default {
  name: 'HomePage',
  components: {
    SplashSection,
    // RegistrationSection,
    AboutSection,
    SponsorsSection,
    TeamSection,
    FooterSection,
    FAQ,
  },
  data() {
    return {
      day: [86, 52, 38, 1],
      sunsetI: [83, 40, 43, 1],
      sunsetF: [66, 13, 48, 1],
      night: [34, 13, 51, 1],
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
        { src: 'https://use.fontawesome.com/releases/v5.14.0/js/all.js' },
      ],
    }
  },
  mounted() {
    this.getHeight()
    window.addEventListener('resize', () => {
      this.getHeight()
    })
    window.addEventListener('scroll', () => {
      this.getHeight()
    })
  },
  methods: {
    // gets the height of the gradient background
    getHeight() {
      const content = document.getElementById('nuxt-content')
      const gradient = document.getElementById('gradient')
      gradient.style.height = `${content.clientHeight}px`
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../sass/theme';

.spiral {
  position: absolute;
  bottom: 350vh;
  z-index: 1;
}

.bridge {
  background-color: adjust-hue($background, 20deg);
}

.forward {
  position: relative;
  z-index: 4;
}

#container {
  position: relative;
}

#details {
  display: none;
  @media (max-width: $min-width) {
    display: block;
  }
}

#gradient {
  background: linear-gradient($background, adjust-hue($background, 20deg));
  z-index: -1;
  position: absolute;
}

#svgMountain {
  margin-top: 20%;
  position: absolute;
  z-index: -1;
}

#nuxt-content {
  z-index: 2;
}

.zBox {
  position: absolute;
  width: 100%;
}

.team-member > img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  // position: absolute;
  // clip: rect(0, 60px, 200px, 0);
}
</style>

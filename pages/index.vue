<template>
  <div id="container">
    <div id="svgMountain" class="zBox" v-html="SVG" />
    <div id="gradient" class="zBox"></div>
    <span id="content" class="zBox">
      <!-- <MLHTrustBadge></MLHTrustBadge> -->
      <SplashSection />
      <DetailsSection />
      <PreRegistrationSection />
      <LinksSection />
      <RegistrationSection />
      <VolunteerSection />
      <AboutSection />
      <SponsorsSection />
      <FooterSection />
    </span>
  </div>
</template>

<script>
// import MLHTrustBadge from './MLHTrustBadge.vue';
import SplashSection from '~/components/SplashSection.vue'
import DetailsSection from '~/components/DetailsSection.vue'
import PreRegistrationSection from '~/components/PreRegistrationSection.vue'
import RegistrationSection from '~/components/RegistrationSection.vue'
import LinksSection from '~/components/LinksSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import VolunteerSection from '~/components/VolunteerSection.vue'
import SponsorsSection from '~/components/SponsorsSection.vue'
import FooterSection from '~/components/FooterSection.vue'
import SVG from '~/assets/mount.svg?raw'

export default {
  name: 'HomePage',
  components: {
    // MLHTrustBadge,
    SplashSection,
    DetailsSection,
    PreRegistrationSection,
    RegistrationSection,
    LinksSection,
    AboutSection,
    SponsorsSection,
    FooterSection,
    VolunteerSection,
  },
  data() {
    return {
      SVG,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.calculateSVGHeight()
  },
  methods: {
    calculateSVGHeight() {
      const content = document.getElementById('content')
      const mount = document.getElementById('svgMountain')
      const spons = document.getElementById('sponsors-section')
      const gradient = document.getElementById('gradient')
      mount.firstChild.setAttribute(
        'height',
        `${(content.offsetHeight - spons.offsetHeight).toString()}px`
      )
      mount.firstChild.setAttribute(
        'width',
        `${content.offsetWidth.toString()}px`
      )
      gradient.style.height = `${content.offsetHeight.toString()}px`
    },
    handleScroll() {
      const mount = document.getElementById('svgMountain').firstChild
      const cls1 = mount.getElementsByClassName('cls-1')[0]
      const cls2 = mount.getElementsByClassName('cls-2')[0]
      cls1.setAttribute('fill', '#fff')
      cls2.setAttribute('fill', '#fff')
    },
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  beforeDestroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
#container {
  position: relative;
}

#gradient {
  background: linear-gradient(
    0deg,
    rgba(28, 21, 87, 1) 0%,
    rgba(208, 124, 106, 1) 33%,
    rgba(226, 134, 107, 1) 61%,
    rgba(0, 174, 239, 1) 100%
  );
  z-index: 1;
  height: fit-content;
}

#svgMountain {
  z-index: 2;
}

#content {
  z-index: 3;
}

.zBox {
  position: absolute;
  width: 100%;
}
</style>

<template>
  <div id="container">
    <div id="svgMountain" class="zBox" v-html="SVG" />
    <div id="gradient" class="zBox"></div>
    <span id="content" class="zBox">
      <SplashSection />
      <DetailsSection />
      <LinksSection />
      <AboutSection />
      <SponsorsSection />
      <FooterSection />
    </span>
  </div>
</template>

<script>
import SplashSection from '~/components/SplashSection.vue'
import DetailsSection from '~/components/DetailsSection.vue'
import LinksSection from '~/components/LinksSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import SponsorsSection from '~/components/SponsorsSection.vue'
import FooterSection from '~/components/FooterSection.vue'
import SVG from '~/assets/mount.svg?raw'

export default {
  name: 'HomePage',
  components: {
    SplashSection,
    DetailsSection,
    LinksSection,
    AboutSection,
    SponsorsSection,
    FooterSection,
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
      const backBottom = mount.getElementById('Rectangle_2')
      const backTop = mount.getElementById('Path_1')
      const frontLarge = mount.getElementById('Path_2')
      const frontSmall = mount.getElementById('Path_4')
      backBottom.style.fill = '#340f47'
      backTop.style.fill = '#340f47'
      frontLarge.style.fill = '#5e2d8f'
      frontSmall.style.fill = '#5e2d8f'
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

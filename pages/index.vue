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
      day: [0, 174, 239, 1],
      sunsetI: [226, 134, 107, 1],
      sunsetF: [208, 124, 106, 1],
      night: [28, 21, 87, 1],
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
      const height = `${Math.floor(
        content.offsetHeight - spons.offsetHeight
      ).toString()}px`
      const width = `${content.offsetWidth.toString()}px`
      mount.style.height = height
      mount.style.width = width
      mount.firstChild.setAttribute('height', height)
      mount.firstChild.setAttribute('width', width)
      const gradient = document.getElementById('gradient')
      gradient.style.height = `${content.offsetHeight}px`
    },
    handleScroll() {
      const mount = document.getElementById('svgMountain').firstChild
      const backBottom = mount.getElementById('Rectangle_2')
      const backTop = mount.getElementById('Path_1')
      const frontLarge = mount.getElementById('Path_2')
      const frontSmall = mount.getElementById('Path_4')
      const scrollPercent = (window.scrollY / window.scrollMaxY) * 3
      let frontColor, backColor
      if (scrollPercent < 1) {
        frontColor = '#fff'
        backColor = this.LerpRGB(this.day, this.sunsetI, scrollPercent)
      } else if (scrollPercent < 2) {
        frontColor = '#fff'
        backColor = this.LerpRGB(this.sunsetI, this.sunsetF, scrollPercent - 1)
      } else {
        frontColor = '#fff'
        backColor = this.LerpRGB(this.sunsetF, this.night, scrollPercent - 2)
      }

      backBottom.style.fill = backColor
      backTop.style.fill = backColor
      frontLarge.style.fill = frontColor
      frontSmall.style.fill = frontColor
    },
    LerpRGB(a, b, t) {
      return `rgba(
      ${Math.floor(a[0] + (b[0] - a[0]) * t)},
      ${Math.floor(a[1] + (b[1] - a[1]) * t)},
      ${Math.floor(a[2] + (b[2] - a[2]) * t)},
      ${Math.floor(a[3] + (b[3] - a[3]) * t)}
      )`
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
    rgba(226, 134, 107, 1) 66%,
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

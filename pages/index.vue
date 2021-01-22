<template>
  <div id="container">
    <div id="gradient" class="zBox"></div>
    <span id="content" class="zBox">
      <MountSVG id="svgMountain" class="zBox" />
      <SplashSection />
      <DetailsSection id="details" />
      <LinksSection />
      <div id="blankSpace"></div>
      <div id="treesTop" class="trees" alt="Forest">
        <div class="treesBetween"></div>
      </div>
      <AboutSection />
      <div id="treesBottom" class="trees" alt="Forest">
        <div class="treesBetween"></div>
      </div>
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
import MountSVG from '~/assets/mount.svg?inline'

export default {
  name: 'HomePage',
  components: {
    SplashSection,
    DetailsSection,
    LinksSection,
    AboutSection,
    SponsorsSection,
    FooterSection,
    MountSVG,
  },
  data() {
    return {
      day: [86, 52, 38, 1],
      sunsetI: [83, 40, 43, 1],
      sunsetF: [66, 13, 48, 1],
      night: [34, 13, 51, 1],
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
      const links = document.getElementById('links-section')

      // set trees
      let height =
        content.offsetHeight -
        document.getElementById('footer-section').offsetHeight -
        600
      const dist = height - links.offsetTop + links.offsetHeight
      document.getElementById('blankSpace').style.paddingTop = `${dist}px`

      // set mountain
      height =
        content.offsetHeight - // mid point-ish
        links.offsetTop
      mount.setAttribute('height', height)
      if (content.offsetWidth < 1920) {
        mount.setAttribute('viewBox', `0 0 ${content.offsetWidth} ${height}`)
      } else {
        mount.setAttribute('viewBox', `0 0 1920 ${height}`)
      }

      // set gradient
      document.getElementById(
        'gradient'
      ).style.height = `${content.offsetHeight}px`
    },
    handleScroll() {
      const mBack = document.getElementById('MountainBack')
      const scrollPercent = (window.scrollY / window.scrollMaxY) * 3
      let backColor
      if (scrollPercent < 1) {
        backColor = this.LerpRGB(this.day, this.sunsetI, scrollPercent)
      } else if (scrollPercent < 2) {
        backColor = this.LerpRGB(this.sunsetI, this.sunsetF, scrollPercent - 1)
      } else {
        backColor = this.LerpRGB(this.sunsetF, this.night, scrollPercent - 2)
      }

      mBack.style.fill = backColor
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
        { src: 'https://use.fontawesome.com/releases/v5.14.0/js/all.js' },
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
@import '../sass/theme';

#container {
  position: relative;
}

#details {
  display: none;
  @media (max-width: $splash-min-width) {
    display: block;
  }
}

#gradient {
  background: linear-gradient(
    0deg,
    $night 10%,
    $twilight 42%,
    $sunset 59%,
    $day 100%
  );
  z-index: 1;
  height: fit-content;
}

#svgMountain {
  position: absolute;
  z-index: -1;
}

#content {
  z-index: 2;
}

#treesBottom {
  background: url('~assets/mount_trees.svg') $midnight;
}

.trees {
  z-index: 3;
  height: 600px;
  width: 100%;
  background-image: url('~assets/mount_trees.svg');
  background-repeat: repeat-x;
}

.treesBetween {
  z-index: 2;
  height: 600px;
  width: 100%;
  background-image: url('~assets/mount_trees.svg');
  background-repeat: repeat-x;
  background-position: -11% 0%;
}

.zBox {
  position: absolute;
  width: 100%;
}
</style>

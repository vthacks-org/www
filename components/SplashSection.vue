<template>
  <section id="splash-section" class="hero is-fullheight-with-navbar">
    <div class="hero-body level is-flex">
      <DetailsSection id="details" class="level-item" />
      <div id="splash-container" class="level-item">
        <!-- Replace with VT Hacks X logo -->
        <!-- <img
          id="splash-logo"
          src="~assets/VTHacksIX-logo.svg"
          alt="VTHacks logo"
        /> -->
        <img id="sun-image" src="~/assets/moon2.svg" alt="Sun" />
      </div>
    </div>
  </section>
</template>

<script>
import DetailsSection from '~/components/DetailsSection.vue'

export default {
  name: 'SplashSection',
  components: {
    DetailsSection,
  },
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../sass/theme';

#splash-logo {
  width: 25vw;
}

#sun-image {
  position: fixed;
  width: 20%;
  z-index: -2;
}

.level-item {
  padding: 1vw;
}

.level {
  margin: 3vw 1.5vw 1px;
  justify-content: center;
}

@media (max-width: $min-width) {
  #splash-logo {
    width: 50vw;
  }

  #sun-image {
    display: none;
  }

  #details {
    display: none;
  }
}
</style>

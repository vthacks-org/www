<template>
  <nav :class="'navigation' + (opened ? ' opened' : '')">
    <div class="nav-drawer-button">
      <img :src="'src/assets/menu-' + (opened ? 'close' : 'open') + '-8bit.png'"
           v-on:click="opened = !opened">
    </div>
    <div class="nav-drawer">
      <div class="nav-link"><a href="#">><span>Home</span></a></div>
      <div class="nav-link"><a href="#">><span>About</span></a></div>
      <div class="nav-link"><a href="#">><span>Schedule</span></a></div>
      <div class="nav-link"><a href="#">><span>Sponsors</span></a></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data() {
    return {
      opened: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../styles/colors';

.navigation {
  position: fixed;
  // width: 30%;
  top: 0;
  left: 0;
  // padding-right: 100px;
  // height: 100vh;
}

.nav-drawer {
  display: none;
}

.opened {
  // background: rgba(0,0,0,0.7);
  .nav-drawer {
    display: initial;
  }
}

.nav-drawer-button {
  img {
    width: 36px;
    height: 36px;
    padding: 8px;
    image-rendering: pixelated;
    cursor: pointer;
  }
}

.nav-link {
  padding: 8px;
  a {
    color: $neon-blue;
    font-family: 'Press Start 2P', monospace;
    font-size: 14px;
    line-height: 28px;
    text-decoration: none;
    span {
      padding-bottom: 2px;
      padding-left: 4px;
      &:hover {
        border-bottom: 2px solid;
        border-bottom-style: outset;
      }
    }
  }
}
</style>

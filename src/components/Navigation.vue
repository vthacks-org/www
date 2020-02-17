<template>
  <nav :class="'navigation' + (opened ? ' opened' : '')">
    <div class="nav-drawer-button">
      <img :src="'static/menu-' + (opened ? 'close' : 'open') + '-8bit.png'"
           v-on:click="opened = !opened">
    </div>
    <div class="navigation-content">
      <div v-for="section in sections"
          class="navigation-link"
          v-on:click="scrollToId(section.id)">
        &lt;<span>{{section.name}}</span>&gt;
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      opened: false,
      sections: [
        {
          name: 'Home',
          id: 'splash-section',
        },
        //{
        //  name: 'Getting_Started',
        //  id: 'links-section',
        //},
        // {
        //  name: 'Register',
        //  id: 'registration-section',
        // },
        // {
        //  name: 'Volunteer',
        //  id: 'volunteer-section',
        // },
        //{
        //  name: 'Schedule',
        //  id: 'schedule-section',
        //},
        {
          name: 'About',
          id: 'about-section',
        },
        // {
        //   name: 'Pre-Register',
        //   id: 'pre-registration-section',
        // },
        {
          name: 'Sponsors',
          id: 'sponsors-section',
        },
      ],
    };
  },
  methods: {
    scrollToId(id) {
      const el = document.getElementById(id);
      // 44px is the height of the navigation bar.
      const target = el.offsetTop - (this.opened ? 0 : 44);
      this.$SmoothScroll(target, 400);
      this.opened = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../styles/colors';
@import '../styles/vars';

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.navigation-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  background-color: rgba(0,0,0,0.8);
}

.navigation-link {
  padding: 8px;
  color: $neon-blue;
  font-family: $font-VT232;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 4px;
  line-height: 28px;
  text-decoration: none;
  cursor: pointer;
  span {
    padding-bottom: 2px;
    padding-left: 4px;
    &:hover {
      border-bottom: 2px solid;
      border-bottom-style: outset;
      border-color: $neon-blue;
    }
  }
  &.active {
    background-color: $neon-blue;
    color: #333;
  }
}

.nav-drawer-button {
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 5;
  img {
    width: 36px;
    height: 36px;
    padding: 8px;
    image-rendering: pixelated;
    cursor: pointer;
  }
}

@media(max-width: 480px) {
  .nav-drawer-button {
    display: initial;
  }
  .navigation-content {
    display: none;
  }

  .opened {
    &.navigation {
      width: 100%;
      height: 100%;
    }
    .navigation-content {
      display: flex;
      height: 100%;
      flex-direction: column;
      padding: 20px;
    }
  }
}
</style>

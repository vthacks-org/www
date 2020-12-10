<template>
  <div>
    <div
      id="navbar"
      centered="true"
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <span class="navbar-item">
          <img id="brand-logo" src="~assets/logo.svg" />
        </span>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div
            v-for="section in sections"
            :key="section.name"
            class="navbar-item page-ref"
            @click="scrollToId(section.id)"
          >
            <span>{{ section.name }}</span>
          </div>
          <div class="navbar-item">
            <button
              id="registerButton"
              class="button is-info is-outlined"
              @click="register"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>

    <section class="main-content">
      <MLHTrustBadge />
      <nuxt />
    </section>
  </div>
</template>

<script>
import MLHTrustBadge from '~/components/MLHTrustBadge.vue'
export default {
  components: {
    MLHTrustBadge,
  },
  data() {
    return {
      prevScrollpos: window.pageYOffset,
      sections: [
        {
          name: 'Home',
          id: 'splash-section',
        },
        {
          name: 'Getting Started',
          id: 'links-section',
        },
        {
          name: 'About',
          id: 'about-section',
        },
        {
          name: 'Sponsors',
          id: 'sponsors-section',
        },
      ],
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToId(id) {
      const el = document.getElementById(id)
      el.scrollIntoView({ behavior: 'smooth' })
      this.opened = false
    },
    handleScroll() {
      const currentScrollPos = window.scrollY
      const el = document.getElementById('navbar')
      if (this.prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
        el.style.top = '0'
      } else {
        el.style.top = `-${el.offsetHeight.toString()}px`
      }
      this.prevScrollpos = currentScrollPos
    },
    register() {
      window.open('https://www.google.com')
    },
  },
}
</script>

<style lang="scss">
@import '../styles/colors';
@import '../styles/vars';
$navHeight: 70px;

#brand-logo {
  max-height: unset;
  width: $navHeight * 1.5;
  height: $navHeight / 1.5;
}

#registerButton {
  font-family: $bnr22;
  font-size: $navHeight / 4;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.8);
  transition: top 0.3s;
  height: $navHeight;
  padding: 0 10em 0 5em;
}

.navbar-burger {
  color: $text-primary;
}

.navbar-end {
  .navbar-item {
    cursor: pointer;
    padding: 5px 15px;
    span {
      font-family: $bnr22;
      font-size: $navHeight / 3;
      color: $text-primary;
    }
    &.page-ref {
      &:hover {
        border-bottom: 2px solid;
        border-bottom-style: outset;
        border-color: $day;
      }
    }
  }
}
</style>

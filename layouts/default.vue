@@ -1,162 +1,173 @@
<template>
  <div>
    <b-navbar
      id="navbar"
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <template slot="brand">
        <b-navbar-item>
          <span class="navbar-item">
            <img id="brand-logo" src="~static/icon.svg" />
          </span>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item
          v-for="section in sections"
          :key="section.name"
          tag="div"
          class="navbar-item page-ref"
          @click="scrollToId(section.id)"
        >
          <span>{{ section.name }}</span>
        </b-navbar-item>
        <b-navbar-item tag="div" class="navbar-item">
          <button
            id="registerButton"
            class="button is-primary is-outlined"
            @click="register"
          >
            Register
          </button>
        </b-navbar-item>
      </template>
    </b-navbar>

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
      const menu = document.getElementsByClassName('navbar-menu')[0]
      const burger = document.getElementsByClassName('navbar-burger')[0]
      const el = document.getElementById(id)
      el.scrollIntoView({ behavior: 'smooth' })
      if (menu.getAttribute('class').includes('is-active')) {
        burger.setAttribute('class', 'navbar-burger burger')
        burger.removeAttribute('aria-expanded')
        menu.setAttribute('class', 'navbar-menu')
      }
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
      window.open(
        'https://docs.google.com/forms/d/1A_J-99egPZl8tFF_r00v1Y81zZYgAbvoOdlz7a2Y3aA'
      )
    },
  },
}
</script>

<style lang="scss">
@import '../sass/theme';
$navcolor: rgba(0, 0, 0, 0.8);
:root {
  --navHeight: 70px;
}
@media (max-width: 720px) {
  :root {
    --navHeight: 40px;
  }
}

#brand-logo {
  max-height: unset;
  width: calc(var(--navHeight) * 1.5);
  height: calc(var(--navHeight) / 1.5);
}

#registerButton {
  font-family: $bnr22;
  font-size: calc(var(--navHeight) / 4);
}

.navbar {
  background-color: $navcolor;
  transition: top 0.3s;
  height: var(--navHeight);
  padding: 0 10em 0 5em;
}

.navbar-burger {
  color: $text-primary;
  cursor: pointer;
  padding: 5px 15px;
  font-size: var(--navHeight);
}

.navbar-end {
  .navbar-item {
    cursor: pointer;
    padding: 5px 15px;
    span {
      font-family: $bnr22;
      font-size: calc(var(--navHeight) / 3);
      color: $text-primary;
    }
    &.page-ref {
      &:hover {
        border-bottom: 2px solid;
        border-bottom-style: outset;
        border-color: $sunset;
      }
    }
  }
}

.navbar-menu {
  &.is-active {
    background-color: $navcolor;
    border-radius: 5%;
  }
}
</style>

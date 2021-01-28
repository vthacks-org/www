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
            <img id="brand-logo" alt="brand logo" src="~assets/alt_logo.svg" />
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
          id: 'registration-section',
        },
        {
          name: 'About',
          id: 'about-content',
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
        'https://docs.google.com/forms/d/e/1FAIpQLSdf8x1PAa2lbNJt68gEBBkZGEEO_26y1prH46RvYN2CCLsfwg/viewform?usp=sf_link'
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
  font-size: var(--navHeight);
}

.navbar-end {
  .navbar-item {
    cursor: pointer;
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

@media (max-width: 1000px) {
  :root {
    --navHeight: 40px;
  }

  .navbar {
    height: var(--navHeight);
    padding: 0 20vw 0 0;
  }

  .navbar-menu {
    position: absolute;
    right: 6em;
    width: auto;
  }

  .navbar-item {
    cursor: pointer;
    span {
      padding: 0 5em;
      font-family: $bnr22;
      font-size: calc(var(--navHeight) / 6);
      color: $text-primary;
    }
  }
}

@media (max-width: 450px) {
  .navbar {
    height: var(--navHeight);
    padding: 0 5em 0 0;
  }
}
</style>

<!-- eslint-disable vue/multi-word-component-names -->
@@ -1,162 +1,173 @@
<template>
  <div>
    <b-navbar
      id="navbar"
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <template #brand>
        <b-navbar-item tag="div">
          <a href="/">
            <img id="brand-logo" alt="brand logo" src="~assets/alt_logo.svg" />
          </a>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item
          v-for="section in sections"
          :key="section.name"
          tag="div"
          class="page-ref"
          @click="scrollToId(section.id)"
        >
          {{ section.name }}
        </b-navbar-item>
        <!-- <b-navbar-item tag="div">
          <button
            id="registerButton"
            class="button is-primary is-outlined"
            @click="register"
          >
            Register
          </button>
        </b-navbar-item> -->
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
      prevScrollpos: 0,
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
      if (el === null) {
        window.open(`/#${id}`, '_self')
      }
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
      // window.open('https://forms.gle/9nCe4389KENDdNYw7')
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
  font-size: 1rem;
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

  &:hover {
    color: #a4a0a0;
  }
}

.navbar-end {
  .navbar-item {
    cursor: pointer;
    font-family: $bnr22;
    font-size: 1.1rem;
    color: $text-primary;

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

@media (max-width: 1024px) {
  :root {
    --navHeight: 40px;
  }

  .navbar {
    height: var(--navHeight);
    padding: 0 20vw 0 0;
  }

  .navbar-menu {
    float: right;
    width: max-content;
  }
}

@media (max-width: 450px) {
  .navbar {
    height: var(--navHeight);
    padding: 0 5em 0 0;
  }
}
</style>

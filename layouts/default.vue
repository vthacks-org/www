<!-- eslint-disable vue/multi-word-component-names -->
@@ -1,162 +1,173 @@
<template>
  <div>
    <nav
      id="navbar"
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="ml-0 navbar-burger burger" tag="button">
          <span></span>
          <span></span>
          <span></span>
        </a>
        <img
          class="navLogo navbar-item"
          src="~/static/navLogo.svg"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </div>

      <div id="navbarItems" class="navbar-menu">
        <div class="navbar-end">
          <div
            v-for="section in sections"
            :key="section.name"
            class="text navbar-item"
            @click="scrollToId(section.id)"
          >
            {{ section.name }}
          </div>
          <div class="navbar-item">
            <a class="button regButton">
              <strong>Register</strong>
            </a>
          </div>
        </div>
        <!-- <div class="navbar-end"></div> -->
      </div>
    </nav>

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
          name: 'About Us',
          id: 'about-content',
        },
        {
          name: 'FAQ',
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
    // window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroyed() {
    // window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToId(id) {
      const menu = document.getElementsByClassName('navbar-menu')[0]
      const el = document.getElementById(id)
      if (el === null) {
        window.open(`/#${id}`, '_self')
      }
      el.scrollIntoView({ behavior: 'smooth' })
      if (menu.getAttribute('class').includes('is-active')) {
        menu.setAttribute('class', 'navbar-menu')
      }
    },
    handleScroll() {
      // const currentScrollPos = window.scrollY
      // const el = document.getElementById('navbar')
      // if (this.prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
      //   el.style.top = '0'
      // } else {
      //   el.style.top = `-${el.offsetHeight.toString()}px`
      // }
      // this.prevScrollpos = currentScrollPos
    },
    register() {
      // window.open('https://forms.gle/9nCe4389KENDdNYw7')
    },
  },
}
</script>

<style lang="scss">
@import '../sass/theme';

:root {
  --navHeight: 70px;
}

.regButton {
  border: none;
  padding-top: 1px;
  padding-bottom: 1px;
  border-radius: 100px;
  color: white;
  background-color: rgba(108, 34, 227, 0.2);
}

.navLogo {
  width: 150px;
}

.navbar {
  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 84.34%);
  transition: top 0.3s;
  height: var(--navHeight);
  padding: 0 120px 0 0;
}

.text {
  font-weight: 700;
}

@media screen and (max-width: 479px) {
  .navLogo {
    display: none;
  }
}
</style>

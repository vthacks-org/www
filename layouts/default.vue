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
        <div class="level">
          <b-navbar-item
            v-for="section in sections"
            :key="section.name"
            tag="div"
            class="page-ref"
            @click="scrollToId(section.id)"
          >
            {{ section.name }}
          </b-navbar-item>

          <b-navbar-item class="regButton" tag="button">
            Register
          </b-navbar-item>
        </div>
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

#brand-logo {
  max-height: unset;
  width: calc(var(--navHeight) * 1.5);
  height: calc(var(--navHeight) / 1.5);
}

.regButton {
  border-radius: 100px;
  height: 40px;
  border: none;
  margin-left: 10px;
  background-color: #8362d4;
}

.navbar {
  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 84.34%);
  transition: top 0.3s;
  height: var(--navHeight);
  padding: 0 10em 0 5em;
}

.navbar-end {
  .navbar-item {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    color: $text-primary;

    &.page-ref {
      &:hover {
        text-shadow: 1px 1px 10px #8362d4;
      }
    }
  }
}

.navbar-menu {
  &.is-active {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1%;
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

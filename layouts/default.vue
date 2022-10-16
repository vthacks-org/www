<!-- eslint-disable vue/multi-word-component-names -->
@@ -1,162 +1,173 @@
<template>
  <div>
    <!-- Following Bulma Structure -->
    <nav
      id="navbar"
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          ref="hamburger"
          class="ml-0 mt-3 navbar-burger burger"
          tag="button"
          aria-expanded="false"
          @click="hamburger()"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <a ref="hamburger2" href="/#splash-section">
          <img
            class="navLogo navbar-item"
            src="~/static/navLogo.svg"
            alt="VT Hacks"
          />
        </a>
      </div>

      <div ref="modal" class="hiddenModal">
        <div class="content">
          <div class="contentTitle">
            <span @click="closeMenu()"><i class="fa fa-times"></i></span>
            <img class="navLogo" src="~/static/navLogo.svg" alt="VT Hacks" />
          </div>
          <div>
            <li
              v-for="section in sections"
              :key="section.name"
              class="text navbar-item lighten-hover"
              @click="scrollToId(section.id)"
            >
              {{ section.name }}
            </li>
          </div>
        </div>
      </div>

      <div id="navbarItems" class="navbar-menu">
        <div class="navbar-end">
          <div
            v-for="section in sections"
            :key="section.name"
            class="text navbar-item lighten-hover"
            @click="scrollToId(section.id)"
          >
            {{ section.name }}
          </div>
          <div class="navbar-item">
            <a class="button regButton" href="/registration">
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
          id: 'about-section',
        },
        {
          name: 'FAQ',
          id: 'faq-section',
        },
        { name: 'Our Team', id: 'team-section' },
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
      this.closeMenu()
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
    hamburger() {
      this.$refs.modal.style.display = 'block'
      this.$refs.hamburger.style.display = 'none'
      this.$refs.hamburger2.style.display = 'none'
      // this.$refs.hamburger.children.forEach((element) => {
      //   console.log(element)
      // })
    },
    closeMenu() {
      this.$refs.modal.style.display = 'none'
      this.$refs.hamburger.style.display = 'block'
      this.$refs.hamburger2.style.display = 'block'
    },
  },
}
</script>

<style lang="scss">
@import '../sass/theme';

:root {
  --navHeight: 70px;
}

.hiddenModal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  // animation: close 1s;

  .content {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    height: 100%;
    border: 1px solid #888;
    width: 250px;
    font-size: 1.2rem;
    animation: open 1s;

    li {
      animation: open 1s;
      text-decoration: none;
      list-style: none;
      padding-left: 0;
    }

    .contentTitle {
      font-size: 1.2rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: flex-start;
    }

    .close {
      color: #aaa;
      float: left;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
  @keyframes open {
    0% {
      font-size: 0;
      width: 0;
    }

    100% {
      font-size: 1.2rem;
      width: 250px;
      display: block;
    }
  }
}

.regButton {
  border: none;
  padding-top: 1px;
  padding-bottom: 1px;
  border-radius: 100px;
  color: white !important;
  background-color: rgba(108, 34, 227, 0.2);
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: rgba(108, 34, 227, 0.517);
    color: white !important;
  }

  &:active {
    background-color: rgba(124, 59, 228, 0.751);
  }
}

.navLogo {
  width: 150px;
  cursor: pointer;
}

.navbar {
  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 84.34%);
  transition: top 0.3s;
  height: var(--navHeight);
  padding: 0 120px 0 0;
}

.lighten-hover {
  transition: color 0.3s ease-in-out;

  &:hover {
    color: rgb(254, 204, 254, 0.9);
  }
}

.text {
  cursor: pointer;
  font-weight: 700;
}
</style>

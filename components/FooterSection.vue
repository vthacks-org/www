<!-- <html> -->
<template>
  <footer id="footer-section" class="level">
    <div class="level-left">
      <div class="level-item">
        <div id="icons">
          <a href="https://www.facebook.com/vthacks" class="link"
            ><span class="icon is-medium"
              ><i class="fab fa-facebook-f"></i></span
          ></a>
          <a href="https://www.instagram.com/vthacks/" class="link"
            ><span class="icon is-medium"><i class="fab fa-instagram"></i></span
          ></a>
          <a href="https://twitter.com/vt_hacks" class="link"
            ><span class="icon is-medium"><i class="fab fa-twitter"></i></span
          ></a>
          <a href="mailto:hacker@vthacks.com" class="link"
            ><span class="icon is-medium"><i class="far fa-envelope"></i></span
          ></a>
        </div>
      </div>
    </div>
    <p class="level-item has-text-centered">
      VTHacks adheres to the&nbsp;
      <a
        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        target="_blank"
        >MLH Code of Conduct</a
      >
    </p>
    <div class="level-right">
      <div class="level-item">
        <div class="dropdown is-up is-hoverable">
          <div class="dropdown-trigger">
            <button
              class="button is-link is-outlined"
              aria-haspopup="true"
              aria-controls="archive"
            >
              <span>Archive</span>
              <span class="icon is-small">
                <i class="fas fa-angle-up" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div id="archive" class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <a href="https://archive4.vthacks.com" class="link"
                  >VTHacks IV</a
                >
              </div>
              <div class="dropdown-item">
                <a href="https://archive5.vthacks.com" class="link"
                  >VTHacks V</a
                >
              </div>
              <div class="dropdown-item">
                <a href="https://archive7.vthacks.com" class="link"
                  >VTHacks 7</a
                >
              </div>
              <div class="dropdown-item">
                <a href="https://archive8.vthacks.com" class="link"
                  >VTHacks 8</a
                >
              </div>
              <div class="dropdown-item">
                <a href="https://archive9.vthacks.com" class="link"
                  >VTHacks IX</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
}
</script>

<style lang="scss" scoped>
@import '../sass/theme';

#footer-section {
  width: 100%;
  min-height: 70px;
  background: #19112a;
}

.level-item {
  color: white;
  padding: 10px 20px;
  font-family: $font-mono;
}
</style>

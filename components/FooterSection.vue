<template>
  <footer id="footer-section" class="footer">
    <h1 class="footerTitle">Stay Updated</h1>
    <input
      class="input is-medium is-rounded"
      placeholder="Your Email..."
      type="email"
    />
    <div class="columns is-mobile">
      <div class="column">
        <a href="https://www.facebook.com/vthacks" class="link"
          ><span class="icon is-medium"><i class="fab fa-facebook-f"></i></span
        ></a>
      </div>
      <div class="column">
        <a href="https://www.instagram.com/vthacks/" class="link"
          ><span class="icon is-medium"><i class="fab fa-instagram"></i></span
        ></a>
      </div>
      <div class="column">
        <a href="https://twitter.com/vt_hacks" class="link"
          ><span class="icon is-medium"><i class="fab fa-twitter"></i></span
        ></a>
      </div>
      <div class="column">
        <a href="https://discord.gg/gHUfdHE7e8" class="link">
          <span class="icon is-medium"> <i class="fab fa-discord"> </i></span>
        </a>
      </div>
    </div>
    <div>
      <p>
        VTHacks adheres to the
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          >MLH Code of Conduct</a
        >
      </p>
      <!-- <div class="dropdown is-up is-hoverable">
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
              <a href="https://archive4.vthacks.com" class="link">VTHacks IV</a>
            </div>
            <div class="dropdown-item">
              <a href="https://archive5.vthacks.com" class="link">VTHacks V</a>
            </div>
            <div class="dropdown-item">
              <a href="https://archive7.vthacks.com" class="link">VTHacks 7</a>
            </div>
            <div class="dropdown-item">
              <a href="https://archive8.vthacks.com" class="link">VTHacks 8</a>
            </div>
            <div class="dropdown-item">
              <a href="https://archive9.vthacks.com" class="link">VTHacks IX</a>
            </div>
          </div>
        </div>
      </div> -->
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
  // background: #19112a;
  background: #271e52;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: -10px;
}

.footerTitle {
  font-size: 48px;
  font-weight: 200;
}

.input {
  width: 60%;
  margin: 25px;
  margin-bottom: 50px;
  background-color: lightgrey;
  color: black;
  text-indent: 20px;
}

::placeholder {
  color: black;
}

.level-item {
  color: white;
  padding: 10px 20px;
  font-family: $font-mono;
}

.icon {
  color: white;
  font-size: 1.5rem;
  border-radius: 100%;
  background-color: #271e52;
}

.icon:hover {
  background-color: adjust-hue($color: #271e52, $degrees: -20);
}
</style>

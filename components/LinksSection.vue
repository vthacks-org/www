<template>
  <section id="links-section">
    <div class="links-content">
      <h1 class="futuristic blue">Getting Started</h1>
      <div class="seperator blue large"></div>
      <div class="info-term">
        $&gt; <span class="tag">INFO: </span>Join us on the event's Slack and
        Devpost!
      </div>
      <div class="actions">
        <a
          id="devpost-button"
          href="https://vthacks7.devpost.com/"
          target="_blank"
          class="register-link medium devpost eightbit-btn"
        >
          <img src="~assets/devpost_small.png" alt="Devpost" />
          Devpost &gt;
        </a>
        <div id="userGuideBtn" class="register">
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vSQ-pK5Bgki80dO3etQ11GLUt_6cv4oSJSt8iBN8YUxqrQkLyHHCOTg8k_iJ1NvPoq76WuC2-kQQNO8/pub?embedded=true"
            class="register-link medium blue eightbit-btn"
            >User Guide &gt;</a
          >
        </div>
      </div>
      <iframe
        class="mobile"
        width="920px"
        height="500px"
        src="https://docs.google.com/document/d/e/2PACX-1vSQ-pK5Bgki80dO3etQ11GLUt_6cv4oSJSt8iBN8YUxqrQkLyHHCOTg8k_iJ1NvPoq76WuC2-kQQNO8/pub?embedded=true"
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LinksSection',
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../sass/theme';

#links-section {
  min-height: 20vh;
  overflow: hidden;
}

#userGuideBtn {
  display: none;
}

.links-content {
  margin: 50px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.seperator {
  margin-bottom: 10px;
}
.info-term {
  padding: 15px;
}
.actions {
  padding: 20px;
  text-align: center;
}
#slack-button,
#devpost-button {
  img {
    height: 18px;
    margin-right: 8px;
  }
}

@media only screen and (max-width: 930px) {
  /* For mobile phones: */
  [class*='mobile'] {
    display: none;
  }

  #userGuideBtn {
    display: block;
  }
}
</style>

<template>
  <div id="links-section">
    <div class="link-content">
      <div class="actions">
        <div>
          <a
            id="devpost-button"
            href="https://vthacks7.devpost.com/"
            target="_blank"
            >Devpost</a
          >
        </div>
        <div>
          <a
            id="livesite-button"
            href="https://vt-hacks-live-site.netlify.app/"
            target="_blank"
            >Live Site</a
          >
        </div>
        <div>
          <b-button
            label="More Info"
            type="is-primary"
            size="is-medium"
            @click="isMapModalActive = true"
          />
        </div>
        <div class="map-modal-container">
          <b-modal v-model="isMapModalActive">
            <img src="https://buefy.org/static/img/placeholder-1280x960.png" />
            <div class="overlay">
              <iframe
                id="information"
                src="https://docs.google.com/document/u/1/d/e/2PACX-1vSQ-pK5Bgki80dO3etQ11GLUt_6cv4oSJSt8iBN8YUxqrQkLyHHCOTg8k_iJ1NvPoq76WuC2-kQQNO8/pub?embedded=true"
              />
            </div>
          </b-modal>
        </div>
      </div>
    </div>
    <!-- <div class="links-content">
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'LinksSection',
  data() {
    return {
      isMapModalActive: false,
    }
  },
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
  text-align: left;
}

#devpost-button {
  color: $peach;
  img {
    height: 18px;
    margin-right: 8px;
  }
}

#livesite-button {
  color: $peach;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 90%;
  max-height: 90%;
  width: inherit;
  height: 100%;
  font-size: 50px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

#information {
  padding: 15px;
  width: 100%;
  height: 100%;
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

<template>
  <div id="details-section">
    <div id="details-background">
      <img src="../assets/splash-details.png">
    </div>
    <h1 class="futuristic yellow center">location &amp; details</h1>
    <div class="seperator yellow large"></div>
    <div class="status">
      <div>
        {{ statusMessage }}
      </div>
    </div>
    <div class="where">
      <div class="where-title futuristic small center">@ Virginia Tech</div>
      <div class="where-location">Surge Space Building</div>
      <div class="where-location">435 Turner St NW,<br>Blacksburg, VA 24060</div>
    </div>
    <div class="when">
      <div class="where-title futuristic small center">Feb 15-17, 2019</div>
    </div>
    <div class="socials">
      <a href="https://www.facebook.com/vthacks" target="_blank">
        <img src="../assets/8bit_facebook.png">
      </a>
      <a href="https://twitter.com/vt_hacks" target="_blank">
        <img src="../assets/8bit_twitter.png">
      </a>
      <a href="https://www.instagram.com/vthacks/" target="_blank">
        <img src="../assets/8bit_instagram.png">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsSection',
  data() {
    return {
      statusMessage: 'VTHacks is defaultDays only away!',
    };
  },
  methods: {
    updateDaysLeft() {
      /* month is 0-11 for some reason where date is 1-31 */
      const endDate = new Date(2019, 1, 15);
      const currentDate = new Date();
      const timeRemaining = endDate - currentDate;
      if (timeRemaining < 0) {
        this.statusMessage = `Thanks for coming! 
        Stay up to date by following us on social media!.`;
        return;
      }
      /* +1 because it the current day is't inculded */
      const daysLeft = Math.floor(timeRemaining / 86400000) + 1;
      this.statusMessage = this.statusMessage.replace('defaultDays', daysLeft);
    },
  },
  created() {
    this.updateDaysLeft();
  },
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../styles/headers';
@import '../styles/vars';

$splash-min-width: 600px;

.status {
  font-family: $font-2P;
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 60vw;
  font-size: 20px;
  padding-bottom: 20px; 
  color: white;
  & > div {
    align-self: center;
    padding: 5px;
  }
}

#details-section {
  background-color: #000;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: center;
  padding: 70px 0;
}

#details-background {
  position: absolute;
  width: 100%;
  min-width: $splash-min-width;
  top: calc(-100vw * 2 / 3 + 65vw);
  left: 50%;
  transform: translateX(-50%) scaleY(-1);
  img {
    width: 100%;
    display: block;
    @media (max-width: $splash-min-width) {
      height: calc(600px * 2 / 3);
    }
  }
  @media (min-width: 1200px) {
    top: 0;
    max-height: calc(100vw * 2 / 3 * 0.62 + 200px);
  }
  @media (max-width: $splash-min-width) {
    top: 0;
  }
}

.where, .when {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  align-items: center;
  .where-title {
    color: $neon-blue;
    -webkit-text-stroke-color: darken($neon-blue, 30%);
  }
  .where-location {
    font-family: $font-2P;
    color: $neon-pink;
    text-align: center;
    line-height: 24px;
  }
}

.socials {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  a {
    text-decoration: none;
    background-color: transparent;
  }
  img {
    margin: 5px 15px 20px 15px;
  }
}

@media (max-width: 480px) {
  #details-section{
    padding: 16px;
  }
  .se-title, .where-title {
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .start-and-end, .where {
    .se-title, .where-title {
      font-size: 1.25em;
    }
    .se-date, .where-location {
      font-size: .8em;
    }
  }

  .start-and-end, .where {
    padding-bottom: 0px;
  }
}
</style>

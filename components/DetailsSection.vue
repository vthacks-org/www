<template>
  <div id="details-section">
    <div id="details-background"></div>
    <h1 class="futuristic yellow center">location &amp; details</h1>
    <div class="seperator yellow large"></div>
    <div class="status">
      <div>
        {{ statusMessage }}
      </div>
      <div>
        Due to COVID-19 this year we are planning to host VTHacks 8 completely
        online.
      </div>
    </div>
    <div class="where">
      <div class="where-title">Virginia Tech</div>
      <div class="where-location">February 26-28, 2021</div>
      <div class="where-location">Surge Space Building</div>
      <div class="where-location">
        435 Turner St NW,<br />Blacksburg VA 24060
      </div>
    </div>
    <div class="socials">
      <a href="https://www.facebook.com/vthacks" target="_blank"> </a>
      <a href="https://twitter.com/vt_hacks" target="_blank"> </a>
      <a href="https://www.instagram.com/vthacks/" target="_blank"> </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsSection',
  data() {
    return {
      statusMessage: 'VTHacks 8 is defaultDays days away!',
    }
  },
  created() {
    this.updateDaysLeft()
  },
  methods: {
    updateDaysLeft() {
      /* month is 0-11 for some reason where date is 1-31 */
      const startHour = new Date(2021, 1, 26, 16)
      const sameDay = new Date(2021, 1, 26)
      const endDate = new Date(2021, 1, 28, 14)
      const currentDate = new Date()

      /* if vthacks is happening or past: */
      if (endDate - currentDate < 0) {
        this.statusMessage = `Thanks for coming! 
        Stay up to date by following us on social media!`
        return
      } else if (endDate - currentDate > 0 && startHour - currentDate < 0) {
        this.statusMessage = 'Welcome to VTHacks 8!'
        return
      }

      /* +1 because it the current day isn't included */
      const daysLeft = Math.floor((sameDay - currentDate) / 86400000) + 1
      this.statusMessage = this.statusMessage.replace('defaultDays', daysLeft)
      if (daysLeft === 1) {
        this.statusMessage = this.statusMessage.replace('days', 'day')
        return
      }
      if (daysLeft === 0) {
        this.statusMessage = 'VTHacks 7 starts today!'
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../styles/headers';
@import '../styles/vars';

$splash-min-width: 600px;

@media only screen and (max-width: 767px) {
  .status {
    font-size: 1em;
  }
}

.status {
  font-family: $font-mono;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 20px;
  letter-spacing: 4px;
  padding-bottom: 20px;
  color: white;
  & > div {
    text-align: center;
    align-self: center;
    padding: 5px;
  }
}

#details-section {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: center;
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

.where,
.when {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;
  .where-title {
    font-family: $font-VT232;
    text-align: center;
    font-size: 200%;
    letter-spacing: 5px;
    color: $neon-blue;
    -webkit-text-stroke-color: transparent;
  }
  .where-location {
    font-family: $font-mono;
    color: $neon-pink;
    text-align: center;
    line-height: 24px;
  }
}

@media (max-width: 480px) {
  #details-section {
    padding: 16px;
  }
}
</style>

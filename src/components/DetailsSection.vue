<template>
  <div id="details-section">
    <div id="details-background">
      <img src="../assets/splash-details.png">
    </div>
    <h1 class="futuristic yellow center">location &amp; details</h1>
    <div class="seperator yellow large"></div>
    <div class="where">
      <div class="where-title futuristic small center">@ Virginia Tech</div>
      <div class="where-location">Surge Space Building</div>
      <div class="where-location">435 Turner St NW,<br>Blacksburg, VA 24060</div>
    </div>
    <div class="start-and-end">
      <div class="start">
        <div class="se-title futuristic small center">Start</div>
        <div class="se-date">Feb 16 @ 6PM</div>
      </div>
      <div class="end">
        <div class="se-title futuristic small center">End</div>
        <div class="se-date">Feb 18 @ 3PM</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsSection',
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../styles/headers';
@import '../styles/vars';

$splash-min-width: 600px;

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

.start-and-end {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  flex-wrap: wrap;
  padding-bottom: 16px;
  .start, .end {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 275px;
    .se-title {
      color: $neon-blue;
      -webkit-text-stroke-color: darken($neon-blue, 30%);
    }
    .se-date {
      font-family: $font-2P;
      color: $neon-pink;
    }
  }
}

.where {
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

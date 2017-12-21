<template>
  <div id="sponsors-section">
    <h1 class="futuristic blue"> Sponsors </h1>
    <div class="seperator large pink"></div>

    <div class="info-term">
      <p>$> <span style="color: blue;">INFO:</span> Sponsors will be published when the list is complete closer to the event</p>
      <p>$> <span style="color: green;">OPPORUNITY:</span> Want to sponsor us? Check out our prospectus for more info</p>
      <p>$> cmd open <a href="https://vthacks.com/sponsorship/prospectus" target="_blank"> ( prospectus )</a> | new tab </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsorsSection',
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../styles/headers';
@import '../styles/vars';

#sponsors-section {
  width: 100%;
  height: 80vh;
  min-height: 400px;
  background-color: #000;
  display: flex;
  flex-direction: column;
}

.info-term {
  .tag {
    color: blue;
  }
  font-family: $font-VT232;
  color: white;
  word-wrap: normal;
  align-self: center;
  padding: 15px;
}

</style>

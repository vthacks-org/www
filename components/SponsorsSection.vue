<template>
  <section id="sponsors-section" class="section">
    <div class="content has-text-centered">
      <h1 class="title is-1">Sponsors</h1>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-child is-flex flex-center">
        <a href="https://www.capitalone.com//" target="_blank">
          <figure class="image">
            <img
              class="sponsor-img big"
              alt="Capital One logo"
              src="~assets/sponsors/capitalone.svg"
            />
          </figure>
        </a>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-child is-flex flex-center">
        <a href="https://www.echoar.xyz/" target="_blank">
          <figure class="image">
            <img
              class="sponsor-img"
              alt="echoAR logo"
              src="~assets/sponsors/echoAR.png"
            />
          </figure>
        </a>
      </div>
      <div class="tile is-child is-flex flex-center">
        <a href="https://balsamiq.com/index.html" target="_blank">
          <figure class="image">
            <img
              class="sponsor-img"
              alt="balsamiq logo"
              src="~assets/sponsors/balsamiq.svg"
            />
          </figure>
        </a>
      </div>
      <div class="tile is-child is-flex flex-center">
        <a href="http://hackp.ac/mlh-stickermule-hackathons" target="_blank">
          <figure class="image">
            <img
              class="sponsor-img"
              alt="stickermule logo"
              src="~assets/sponsors/sticker-mule-logo-dark.png"
            />
          </figure>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SponsorsSection',
}
</script>

<style lang="scss" scoped>
@import '../sass/theme';

#sponsors-section {
  z-index: -1;
  margin-top: 3vw;
  background: $midnight;
  width: 100%;
  div {
    h1 {
      display: none; // Remove to show sponsor text
      color: $peach;
      font-family: $bnr22;
    }
  }
}

.sponsor-img {
  display: none; // Remove to show sponsor images
  height: auto;
  max-width: 300px;
  &.big {
    max-width: 600px;
    min-width: 400px;
  }
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.is-child {
  padding: 30px;
}

@media (max-width: $min-width) {
  #sponsors-section {
    z-index: -1;
    margin-top: 0%;
    background: $midnight;
    width: 100%;
    div {
      h1 {
        color: $peach;
        font-family: $bnr22;
      }
    }
  }
}
</style>

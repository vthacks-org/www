<template>
  <section id="sponsors-section" class="section">
    <div class="content has-text-centered">
      <h1 class="title is-1">Sponsors</h1>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-child is-flex flex-center">
        <a href="https://www.echoar.xyz/" target="_blank">
          <figure class="image">
            <img class="sponsor-img" src="~assets/sponsors/echoAR.png" />
          </figure>
        </a>
      </div>
      <div class="tile is-child is-flex flex-center">
        <a href="https://balsamiq.com/index.html" target="_blank">
          <figure class="image">
            <img class="sponsor-img" src="~assets/sponsors/balsamiq.svg" />
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
  margin-top: 4vw;
  background: $midnight;
  width: 100%;
  div {
    h1 {
      color: $peach;
      font-family: $bnr22;
    }
  }
}

.sponsor-img {
  height: auto;
  max-width: 300px;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.is-child {
  padding: 30px;
}
</style>

<template>
  <section id="about-section" class="section is-medium">
    <h1 class="title">Get Ready For VT Hacks X</h1>
    <div class="columns desktop level">
      <div class="column">
        <img src="~/static/about/discordInfo.svg" />
        <h1>Follow the Socials</h1>
        <img src="~/static/about/devPostInfo.svg" />
      </div>
      <div class="column">
        <h1>
          Join the
          <a target="_blank" href="https://discord.gg/Bk5t9Pr2">Discord</a>
          Server
        </h1>
        <img class="twitter" src="~/static/about/twitterInfo.svg" />
        <h1>Add Your Team on DevPost</h1>
      </div>
    </div>

    <div class="mobile">
      <img src="~/static/about/discordInfo.svg" />
      <h1>
        Join the
        <a target="_blank" href="https://discord.gg/Bk5t9Pr2">Discord</a> Server
      </h1>
      <img class="twitter" src="~/static/about/twitterInfo.svg" />
      <h1>Follow the Socials</h1>
      <img src="~/static/about/devPostInfo.svg" />
      <h1>Add Your Team on DevPost</h1>
    </div>
  </section>
</template>

<script></script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../sass/theme';

.section {
  // background-color: #2d195e;
  background: url('~/static/about/backgroundLighting.svg') $background no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: white;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
}

.column {
  h1 {
    font-size: 3rem;
    padding: 100px;
    font-weight: 700;
    text-align: center;

    a {
      color: #9b88cb;
    }
  }
}

.mobile {
  display: none;
}

@media screen and (max-width: 480px) {
  .mobile {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 2rem;
      padding: 10px;
      font-weight: 700;
      text-align: center;
    }

    a {
      color: #9b88cb;
    }
  }

  .desktop {
    display: none;
  }
}
</style>

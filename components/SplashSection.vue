<template>
  <section class="splash section">
    <div class="columns">
      <div class="column details">
        <img class="logo" src="~/static/splash/logo.svg" />
        <div class="text">
          <h1>10<span>th</span> Anniversary</h1>
          <h4>Blacksburg, VA</h4>
          <p>Virginia Tech's Biggest Annual Hackathon.</p>
          <p>Register to attend VTHacks X, <b>November 11 - 13th, 2022</b></p>
          <button class="shadow-none">Register</button>
        </div>
      </div>
      <img class="column astronaut" src="~/static/splash/astronaut.svg" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SplashSection',
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../sass/theme';

.details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Roboto', sans-serif;

  .text {
    margin-left: 15px;
  }

  h1 {
    font-weight: 900;
    font-size: xx-large;
    font-variant: small-caps;
    margin-bottom: 10px;

    span {
      font-size: x-large;
    }
  }

  h4 {
    font-weight: 900;
    font-size: large;
    text-transform: uppercase;
  }

  p {
    font-weight: 500;
    font-size: x-large;
  }

  button {
    width: 150px;
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 15px;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 30px;
    text-transform: uppercase;
    border-radius: 10px;
  }

  .logo {
    max-width: 500px;
    width: 70%;
  }
}

.astronaut {
  min-width: 500px;
  max-width: 700px;
  width: 100%;
}

.splash {
  width: 100%;
  background: url('../static/splash/background.svg') #2d195e no-repeat;
}

@media screen and (max-width: 479px) {
  .details {
    align-items: center;

    .text {
      text-align: center;
    }
  }

  .astronaut {
    display: none;
  }

  .splash {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

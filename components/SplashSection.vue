<template>
  <section id="splash-section" class="splash section">
    <div class="columns">
      <div class="column details">
        <img class="logo" src="~/static/splash/logo.svg" />
        <div class="text">
          <h1>10<span>th</span> Anniversary</h1>
          <h4>Blacksburg, VA</h4>
          <p>Virginia Tech's Biggest Annual Hackathon.</p>
          <p>Register to attend VTHacks X, <b>November 11 - 13th, 2022</b></p>
          <!--TODO: Make hover animation-->
          <a href="/registration">
            <button class="shadow-none reg-button">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              Register
            </button>
          </a>
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

.lighting {
  position: absolute;
  top: -100px;
  left: 0;
}

$line-size: 4px;
$distance: 4px;
$delay1: 0.5s;
$delay2: 0.6s;

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

  .reg-button {
    background: $background;
    border: 1px solid white;
    width: 150px;
    color: white;
    padding: 15px;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 30px;
    text-transform: uppercase;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    transition: all 2s;
    text-align: center;

    .line {
      background: rgb(255, 255, 255);
      position: absolute;
      transition: none;
      transform: scale(0);
      opacity: 1;
    }

    .line:nth-child(1) {
      transform-origin: 100% 100%;
      height: $line-size;
      width: 20%;
      bottom: 0;
    }

    .line:nth-child(4) {
      transform-origin: 0 100%;
      height: $line-size;
      width: 20%;
      top: $distance;
      right: 0;
    }

    .line:nth-child(2) {
      transform-origin: 100% 100%;
      height: 100%;
      width: $line-size;
      bottom: 0;
      left: $distance;
    }

    .line:nth-child(5) {
      transform-origin: 100% 0;
      height: 100%;
      width: $line-size;
      bottom: 0;
      right: $distance;
    }

    .line:nth-child(3) {
      transform-origin: 0 100%;
      height: $line-size;
      width: 100%;
      top: $distance;
      left: $distance;
    }

    .line:nth-child(6) {
      transform-origin: 100% 0;
      height: $line-size;
      width: 100%;
      bottom: 0;
      right: $distance;
    }

    &:hover > .line {
      transform: scale(1);
      opacity: 0;
      transition: all 3s;
    }

    &:hover > .line:nth-child(2),
    &:hover > .line:nth-child(5) {
      transition-delay: $delay1;
    }

    &:hover > .line:nth-child(3),
    &:hover > .line:nth-child(6) {
      transition-delay: $delay2;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      opacity: 0.9;
    }

    &:active {
      border-color: rgba(255, 255, 255, 0.8);
      background: rgba(255, 255, 255, 0.363);
      opacity: 1;
    }
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

  @keyframes rock {
    0% {
      transform: rotate(3deg);
    }

    50% {
      transform: rotate(-3deg);
    }

    100% {
      transform: rotate(3deg);
    }
  }

  animation: rock 2.5s linear infinite;
}

.splash {
  width: 100%;
  background: url('../static/splash/background.svg') $background no-repeat;
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

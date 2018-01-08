<template>
  <div id="registration-section">
    <div class="gradient-seperator"></div>
    <div class="register-content">
      <div class="register-deadline futuristic blue center">Registration is Open!</div>
      <div id="register-separator" class="seperator blue large"></div>
      <div class="info-term">
        <p>$> <span style="color: #48d247;">INFO: </span> VTHacks accepts applicants on a first-come, first-served basis.
          Applicatants from all backgrounds are encouraged to apply. </p>
      </div>
      <div class="register">
        <!-- This is explicit because off www -->
        <a href="https://vthacks.com/register" class="register-link eightbit-btn">Sign Up &gt;</a>
      </div>
    </div>
    <div class="gradient-seperator bottom reversed"></div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationSection',
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../styles/headers';
@import '../styles/vars';

#registration-section {
  background-color: #111;
  overflow: hidden;
}

#register-separator {
  margin-bottom: 0px;
}

.register-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 25px 7vh 25px;
}

.register {
  padding: 16px;
  .register-link {
    font-family: $font-2P;
    padding: 16px;
  }


  $outline-width: 4px;
  $outline-color: white;
  $shadow-width: 5px;

  $button-background: darken(blue, 30%);
  $sec-button-background: lighten(blue, 10%);
  $shadow-color:  blue;


  .eightbit-btn {
    background: $button-background;
    display: inline-block;
    position: relative;
    text-align: center;
    font-size: 20px;
    padding: 20px;
    font-family: $font-2P;
    text-decoration: none;
    color: white;
    box-shadow: inset (-$shadow-width) (-$shadow-width) 0px 0px $shadow-color;

    &:hover,
    &:focus {
        background: $sec-button-background;
        box-shadow: inset (-$shadow-width*1.5) (-$shadow-width*1.5) 0px 0px $shadow-color;
    }

    &:active {
        box-shadow: inset $shadow-width $shadow-width 0px 0px $shadow-color;
    }

    &:before,
    &:after {
    content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: content-box;
    }

    &:before {
        top: -$outline-width;
        left: 0;
        border-top: $outline-width $outline-color solid;
        border-bottom: $outline-width $outline-color solid;
    }

    &:after {
        left: -$outline-width;
        top: 0;
        border-left: $outline-width $outline-color solid;
        border-right: $outline-width $outline-color solid;
    }
}

/* All Mobile Sizes (devices and browser) */
@media only screen and (max-width: 480px) {
  .eightbit-btn {
    font-size: 12px;
    padding: 10px;
  }
  .info-term {
    font-size: 10px;
  }
}

}

.info-term {
  .tag {
    color: blue;
  }
  font-family: $font-VT232;
  color: white;
  word-wrap: normal;
  align-self: center;
}
</style>

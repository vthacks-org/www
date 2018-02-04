<template>
  <div id="registration-section">
    <div class="gradient-seperator"></div>
    <div class="register-content">
      <div class="register-deadline futuristic blue center">Registration</div>
      <div id="register-separator" class="seperator blue large"></div>
      <div class="info-term">
        <p>$> <span style="color: #48d247;">INFO: </span> VTHacks accepts applicants on a first-come, first-serve basis.
          Applicants from all backgrounds are encouraged to apply. </p>
      </div>
      <div class="register">
        <a href="/register" class="register-link medium blue eightbit-btn">Sign Up &gt;</a>
      </div>
    </div>
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
@import '../styles/eightbit-btn';

#registration-section {
  min-height: 40vh;
  background-color: $rich-black;
  overflow: hidden;
}

#register-separator {
  margin-bottom: 0px;
}

.register-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3vh 25px;
}

/* All Mobile Sizes (devices and browser) */
@media only screen and (max-width: 480px) {
  .info-term {
    font-size: 11px;
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
  max-width: 80%;
}
</style>

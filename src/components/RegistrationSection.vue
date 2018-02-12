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
        <a href="/register" class="register-link big blue eightbit-btn">Sign Up &gt;</a>
      </div>
      <div class="info-term">
        <p>
          $> <span style="color: rgba(233, 233, 0, 1);">Note: </span>
          Applicants who are under the age of 18 are required to fill out the
          <a href="/files/minors-form.pdf">VTHacks Minors Form</a>.
        </p>
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
@import '../styles/info-term';

#registration-section {
  min-height: 30vh;
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
  margin: 5vh 25px;
}
</style>

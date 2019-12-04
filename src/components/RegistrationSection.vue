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
        <a href="https://register.vthacks.com/" class="register-link big blue eightbit-btn">Sign Up &gt;</a>
      </div>
      <!-- <div class="info-term">
        <p>
          $> <span style="color: rgba(233, 233, 0, 1);">NOTE: </span>
          Applicants who are under the age of 18 are required to fill out the
          <a href="/files/minors-form.pdf">VTHacks Minors Form</a>. You will need to print out the form and bring it with you to the event.
        </p>
      </div> -->
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

.see-ya-there{
  -webkit-text-stroke-color: darken($neon-pink, 30%);
  color: $neon-pink;
  margin: 20px 55px 5px 55px;
  .term {
    font-family: $font-2P;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
  }
}

.info-term {
  font-size: 1.5rem;
}

@media (max-width: 480px) {
  .see-ya-there{
    -webkit-text-stroke-color: darken($neon-pink, 30%);
    color: $neon-pink;
    margin: 15px 5px 5px 5px;
    .term{
      line-height: 25px;
    }
  }
}
</style>

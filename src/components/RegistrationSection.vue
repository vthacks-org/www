<template>
  <div id="registeration-section">
    <div class="gradient-seperator"></div>
    <div class="register-content">
      <div class="register-deadline futuristic blue center">Registration is Open!</div>
      <div id="register-separator" class="seperator blue large"></div>
      <div class="info-term">
        <p>$> <span style="color: #48d247;">INFO: </span> VTHacks accepts applicants on a first-come, first-served basis.
          Applicatants from all backgrounds are encouraged to apply. </p>
      </div>
      <div class="register">
        <a href="/register" class="register-link">&lt;Sign Up&gt;</a>
      </div>
    </div>
    <div class="gradient-seperator reversed"></div>
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

#registeration-section {
  background-color: #111;
  overflow: hidden;
}

#register-separator {
  margin-bottom: 0px;
}

.register-content {
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register {
  padding: 16px;
  .register-link {
    font-family: $font-2P;
    padding: 16px;
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

<template>
  <div id="registration-section">
    <div class="gradient-seperator"></div>
    <div class="register-content">
      <div class="register-deadline futuristic blue center">Registration Closed</div>
      <div id="register-separator" class="seperator blue large"></div>
      <div class="see-ya-there">
        <h4 class="term"> Thanks to everyone who applied! <br/> We will see you all at the event!</h4>
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
  margin: 5vh 25px 1vh 25px;
}

.see-ya-there{
  -webkit-text-stroke-color: darken($neon-pink, 30%);
  color: $neon-pink;
  margin: 20px 55px 5px 55px;
  .term {
    font-family: $font-2P;
    text-align: center;
    line-height: 35px;
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .see-ya-there{
    -webkit-text-stroke-color: darken($neon-pink, 30%);
    color: $neon-pink;
    margin: 15px 5px 5px 5px;
    .term{
      font-size: 18px;
      line-height: 25px;
    }
  }
}
</style>

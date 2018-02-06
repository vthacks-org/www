<template>
  <div id="travel-section">
    <div class="travel-content">
      <div class="register-deadline futuristic small yellow center">Travel</div>
      <div id="register-separator" class="seperator yellow large"></div>

      <div class="info-term">
        <p>$> <span style="color: #48d247;">INFO: </span> VTHacks offers a lot of ways to help you get here.
          We send buses to most schools nearby schools and additionally we offer travel reimbursement to people
          making the trip themselves or with friends. For questions, email us at <a href="mailto:info@vthacks.com">transportation@vthacks.com</a>.</p>
      </div>

      <div class="actions">
        <a href="/bus-interest" target="_blank" class="register-link medium blue eightbit-btn">Bus Interest &gt;</a>
        <a href="/travel-reimbursement" target="_blank" class="register-link medium blue eightbit-btn">Travel Reimbursement &gt;</a>
      </div>
      <div class="gradient-seperator bottom reversed"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelSection',
};
</script>

<style lang="scss" scoped>
@import '../styles/headers';
@import '../styles/vars';
@import '../styles/colors';
@import '../styles/eightbit-btn';

#travel-section{
  min-height: 30vh;
  background-color: $rich-black;
  overflow: hidden;
}

#travel-separator{
  margin-bottom: 0px;
}

.travel-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3vh 25px;
}

.info-term {
  .tag {
    color: #48d247;
  }
  font-family: $font-VT232;
  color: white;
  word-wrap: normal;
  align-self: center;
  max-width: 80%;
}

/* All Mobile Sizes (devices and browser) */
@media only screen and (max-width: 480px) {
  .info-term {
    font-size: 11px;
  }
}
</style>
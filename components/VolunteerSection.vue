<template>
  <div id="volunteer-section">
    <div class="volunteer-content">
      <div class="register-deadline futuristic blue center">Volunteering</div>
      <div id="register-separator" class="seperator pink large"></div>

      <div class="info-term">
        <p>
          $> <span style="color: #48d247">INFO: </span> Want to help us out?
          VTHacks always needs volunteers to help during the event. You don't
          need any special skills but if you have any questions please
          <a href="mailto:yahui624@vt.edu">email us</a>.
        </p>
      </div>

      <div class="actions">
        <a
          href="https://www.signupgenius.com/go/9040e48afac2babf85-vthacks"
          target="_blank"
          class="register-link big neon-pink eightbit-btn"
          >Volunteer &gt;</a
        >
        <!-- <a href="/travel-reimbursement" class="register-link medium vth-red eightbit-btn">Request Bus &gt;</a>
        <a href="/bus-interest" class="register-link medium vth-blue eightbit-btn">Travel Reimbursement &gt;</a> -->
      </div>
    </div>
    <div class="gradient-seperator bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'VolunteerSection',
}
</script>

<style lang="scss" scoped>
@import '../styles/headers';
@import '../styles/vars';
@import '../styles/colors';
@import '../styles/eightbit-btn';
@import '../styles/info-term';

#volunteer-section {
  min-height: 30vh;
  background-color: $rich-black;
  overflow: hidden;
}

#volunteer-separator {
  margin-bottom: 1px;
}

.volunteer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3vh 25px;
}
</style>

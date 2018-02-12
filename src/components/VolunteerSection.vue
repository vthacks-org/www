<template>
  <div id="volunteer-section">
    <div class="volunteer-content">
      <div class="register-deadline futuristic small pink center">Volunteering</div>
      <div id="register-separator" class="seperator pink large"></div>

      <div class="info-term">
        <p>$> <span style="color: #48d247;">INFO: </span> Want to help us out? VTHacks
          always needs volunteers to help during the event. You don't need any special skills or anything but
           if you have any questions email us at <a href="mailto:info@vthacks.com">info@vthacks.com</a>.</p>
      </div>

      <div class="actions">
        <a href="/volunteering" target="_blank" class="register-link medium neon-pink eightbit-btn">Volunteer &gt;</a>
        <!-- <a href="/travel-reimbursement" class="register-link medium vth-red eightbit-btn">Request Bus &gt;</a>
        <a href="/bus-interest" class="register-link medium vth-blue eightbit-btn">Travel Reimbursement &gt;</a> -->
      </div>
    </div>
    <div class="gradient-seperator bottom reversed"></div>
  </div>
</template>

<script>
export default {
  name: 'VolunteerSection',
};
</script>

<style lang="scss" scoped>
@import '../styles/headers';
@import '../styles/vars';
@import '../styles/colors';
@import '../styles/eightbit-btn';
@import '../styles/info-term';

#volunteer-section{
  min-height: 30vh;
  background-color: $rich-black;
  overflow: hidden;
}

#volunteer-separator{
  margin-bottom: 0px;
}

.volunteer-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3vh 25px;
}

</style>

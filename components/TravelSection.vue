<template>
  <section id="travel-section">
    <div class="travel-content">
      <div class="register-deadline futuristic small yellow center">Travel</div>
      <div id="register-separator" class="seperator yellow large"></div>

      <div class="info-term">
        <p>
          $> <span style="color: #48d247">INFO: </span> VTHacks offers a lot of
          ways to help you get here. We offer travel reimbursement to people
          making the trip themselves or with friends. For questions, email us at
          <a href="mailto:info@vthacks.com">transportation@vthacks.com</a>.
        </p>
      </div>

      <div class="actions">
        <a
          href="/travel-reimbursement"
          target="_blank"
          class="register-link medium blue eightbit-btn"
          >Travel Reimbursement &gt;</a
        >
      </div>
      <div class="gradient-seperator bottom reversed"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TravelSection',
}
</script>

<style lang="scss" scoped>
@import '../sass/theme';

#travel-section {
  min-height: 30vh;
  background-color: $rich-black;
  overflow: hidden;
}

#travel-separator {
  margin-bottom: 1px;
}

.actions {
  text-align: center;
}

.travel-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3vh 25px;
}
</style>

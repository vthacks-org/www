<template>
  <div id="pre-registration-section">
    <div class="gradient-seperator"></div>
    <h2 class="futuristic center pink top-padding">
      VTHACKS 8 Pre-Registration
    </h2>
    <div class="status">
      We recommend you fill out our pre-registration form to stay up to date
      with VTHacks 8!
      <button
        class="eightbit-btn medium neon-pink button-center"
        @click="openLink"
      >
        Pre-Registatration Form
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openLink: () => {
      window.open('https://forms.gle/t3ruSpXRLamcgyxi9', '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/headers';
@import '../styles/vars';
@import '../styles/colors';
@import '../styles/eightbit-btn';

.status {
  font-family: $font-mono;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  font-size: 20px;
  text-align: center;
  letter-spacing: 4px;
  padding-bottom: 20px;
  color: white;
  & > div {
    text-align: center;
    align-self: center;
    padding: 5px;
  }
}

.top-padding {
  padding-top: 20px;
}

.button-center {
  align-self: center;
}
</style>

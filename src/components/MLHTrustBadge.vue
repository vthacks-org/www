<template>
  <a id="mlh-trust-badge" href="https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=white" target="_blank">
    <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg" alt="Major League Hacking 2017 Hackathon Season" style="width:100%">
  </a>
</template>

<script>
export default {
  name: 'MLHTrustBadge',
};
</script>

<style lang="scss" scoped>

#mlh-trust-badge {
  display:block;
  max-width:100px;
  min-width:60px;
  position:absolute;
  right:50px;
  top:0;
  width:10%;
  z-index:10000;
  background-color: transparent;

  @media(max-width: 480px) {
    right: 8px !important;

  }

}
</style>

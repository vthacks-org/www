<template>
  <a
    id="mlh-trust-badge"
    href="https://mlh.io/seasons/2022/events"
    target="_blank"
  >
    <img
      src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg"
      alt="Major League Hacking 2022 Hackathon Season"
      style="width: 100%"
    />
  </a>
</template>

<script>
export default {
  name: 'MLHTrustBadge',
}
</script>

<style lang="scss" scoped>
#mlh-trust-badge {
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: absolute;
  right: 50px;
  top: 0;
  width: 10%;
  z-index: 10000;
  background-color: transparent;

  @media (max-width: 480px) {
    right: 8px !important;
  }
}
</style>

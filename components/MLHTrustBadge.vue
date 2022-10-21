<!-- <html> -->
<template>
  <a
    id="mlh-trust-badge"
    href="https://mlh.io/seasons/2023/events"
    target="_blank"
  >
    <img
      src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-black.svg"
      alt="Major League Hacking 2023 Hackathon Season"
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
  position: fixed;
  right: 1rem;
  top: 0;
  width: 10%;
  z-index: 10000;
  background-color: transparent;
}
</style>

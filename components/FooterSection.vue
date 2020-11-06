<template>
  <div id="footer-section">
    <div class="code-of-conduct">
      <p>
        $> <span style="color: #48d247"> INFO: </span> VTHacks adheres to the
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          >( MLH Code of Conduct )</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',
}
</script>

<style lang="scss" scoped>
@import '../styles/vars';
@import '../styles/colors';

#footer-section {
  width: 100%;
  min-height: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.code-of-conduct {
  color: white;
  padding: 20px;
  font-family: $font-mono;
}
</style>

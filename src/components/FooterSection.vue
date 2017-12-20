<template>
  <div id="footer-section">
    <div class="code-of-conduct">
      <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"> $> cat MLH Code of Conduct </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style lang="scss" scoped>
  @import '../styles/vars';

  #footer-section {
    width: 100%;
    min-height: 100px;
    background-color: #111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .code-of-conduct {
    padding: 20px;
    align-self: center;
  }

  a {
    font-family: $font-VT232;
    color: yellow;
    background-color: blue;
  }


</style>

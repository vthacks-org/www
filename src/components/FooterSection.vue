<template>
  <div id="footer-section">
    <div class="gradient-seperator"></div>
    <div class="code-of-conduct">
       <p> $> <span style="color: #48d247"> INFO: </span> VTHacs adheres to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">( MLH Code of Conduct )</a> </p>
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
  @import '../styles/colors';

  #footer-section {
    width: 100%;
    min-height: 100px;
    background-color: #111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: url('../assets/splash-background.png');
  }

  .gradient-seperator{
      height: 2px;
      background: linear-gradient(to right,
        $neon-pink                0%,
        $neon-blue                100%);

  }

  .code-of-conduct {
    color: white;
    padding: 20px;
    align-self: center;
    font-family: $font-VT232;
  }


</style>

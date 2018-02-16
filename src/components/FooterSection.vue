<template>
  <div id="footer-section">
    <div class="code-of-conduct">
       <p> $> <span style="color: #48d247"> INFO: </span> VTHacks adheres to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">( MLH Code of Conduct )</a> </p>
    </div>
    <div class="socials">
      <a href="https://www.facebook.com/vthacks" target="_blank">
        <img src="../assets/8bit_facebook.png">
      </a>
      <a href="https://twitter.com/vt_hacks" target="_blank">
        <img src="../assets/8bit_twitter.png">
      </a>
      <a href="https://www.instagram.com/vthacks/" target="_blank">
        <img src="../assets/8bit_instagram.png">
      </a>
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
    align-items: center;
    background: url('../assets/splash-background.png');
  }

  .code-of-conduct {
    color: white;
    padding: 20px;
    font-family: $font-VT232;
  }

  .socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    a {
      text-decoration: none;
      background-color: transparent;
    }
    img {
      margin: 5px 15px 20px 15px;
    }
  }

</style>

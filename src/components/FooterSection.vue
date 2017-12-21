<template>
  <div id="footer-section">
    <div class="code-of-conduct">
       <p> $> <span style="color: blue"> INFO: </span> VTHack adheres to the MLH Code of Conduct, for more info please see it here </p>
       <p> $> cmd cat <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">( MLH Code of Conduct )</a> | new tab</p>
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
    color: white;
    padding: 20px;
    align-self: center;
    font-family: $font-VT232;
  }


</style>

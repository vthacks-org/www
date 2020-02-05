<template>
  <div id="links-section">
    <div class="links-content">
      <h1 class="futuristic blue">Getting Started</h1>
      <div class="seperator blue large"></div>
      <div class="info-term">$&gt; <span class="tag">INFO: </span>Join us on the event's Slack and Devpost!</div>
      <div class="actions">
        <a href="https://tinyurl.com/t22v4hp" id="slack-button" target="_blank" class="register-link medium slack eightbit-btn">
          <img src="../assets/slack_small.png">
          Slack &gt;
        </a>
        <a href="https://vthacks-v.devpost.com/" id="devpost-button" target="_blank" class="register-link medium devpost eightbit-btn">
          <img src="../assets/devpost_small.png">
          Devpost &gt;
        </a>
      </div>
      <iframe width="55%" height="500px"src="https://docs.google.com/document/d/e/2PACX-1vSQ-pK5Bgki80dO3etQ11GLUt_6cv4oSJSt8iBN8YUxqrQkLyHHCOTg8k_iJ1NvPoq76WuC2-kQQNO8/pub?embedded=true"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinksSection',
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../styles/headers';
@import '../styles/vars';
@import '../styles/eightbit-btn';
@import '../styles/info-term';

#links-section {
  min-height: 20vh;
  background-color: $rich-black;
  overflow: hidden;
}

.links-content {
  margin: 50px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.seperator {
  margin-bottom: 10px
}
.info-term {
  padding: 15px;
}
.actions {
  padding: 20px;
  text-align: center;
}
#slack-button, #devpost-button {
  img {
    height: 18px;
    margin-right: 8px;
  }
}

</style>

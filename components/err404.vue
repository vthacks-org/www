<template>
  <div id="err404">
    <div class="centered">
      <div class="error text">
        Sorry, nothing here.
      </div>
      <img id="dead" src="../assets/base-logo.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'err404',
};
</script>

<style lang="scss" scoped>
@import '../styles/colors';
@import '../styles/vars';

#err404 {
  position: relative;
  height: 100vh;
  background: $rich-black;
}

.centered{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.error.text {
  color: white;
  font-family: $font-2P;
  text-align: center;
  font-size: 26px;
}

img {
  height: 80vh;
}


@keyframes fadeIn {
  0% { opacity: 0 }
  100% { opacity: 1 }
}

@keyframes fadeOut {
  0% { opacity: 1 }
  100% { opacity: 0 }
}
</style>
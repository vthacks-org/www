<template>
  <iframe
    data-tally-src="https://tally.so/r/nrjZ0M?transparentBackground=1"
    width="100%"
    height="100%"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    title="VTHacks X Registration"
  ></iframe>
</template>

<script>
export default {
  name: 'RegistrationPage',
  head() {
    return {
      script: [
        {
          src: 'https://tally.so/widgets/embed.js',
          async: true,
        },
      ],
    }
  },
}
</script>

<style type="text/css">
iframe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 0;
  margin-top: 70px;
  z-index: 3;
}
</style>

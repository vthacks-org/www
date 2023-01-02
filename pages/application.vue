---
navigation: false
---

<template>
  <iframe
    v-if="showPage === true"
    data-tally-src="https://tally.so/r/mRWZMP?transparentBackground=1"
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
  data() {
    return {
      showPage: false,
    }
  },
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
  created() {
    this.valid()
  },
  methods: {
    valid() {
      const deadline = new Date('oct 1, 2022 12:00:00').getTime()
      const t = deadline - new Date().getTime()
      this.showPage = t < 0
    },
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
  z-index: 3;
}
</style>

<template>
  <div class="container">
    <div>
      <h3>{{ url }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckIn',
  data() {
    return {
      url: this.getUrl(),
    }
  },
  mounted() {
    this.url = window.location.search
  },
  methods: {
    getUrl() {
      return this.url
    },
  },
}
</script>

<style type="text/css">
.container {
  display: grid;
  height: 100vh;
  place-items: center;
  color: black;
}
</style>

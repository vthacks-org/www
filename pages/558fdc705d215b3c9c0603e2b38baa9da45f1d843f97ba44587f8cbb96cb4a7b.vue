---
navigation: false
---

<template>
  <div class="container">
    <div>
      <h1>Puzzle Two</h1>
      <h3>{{ getUrl() }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PuzzleOne',
  data() {
    return {
      showPage: false,
    }
  },
  methods: {
    getUrl() {
      return window.location.pathname
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

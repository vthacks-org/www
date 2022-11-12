---
navigation: false
---

<template>
  <div class="container">
    <div
      class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
    >
      <h1>Puzzle Two</h1>
      <h3 style="text-align: center">
        I'm sure that puzzle was a little too easy for you. You're almost
        halfway there! But, don't get too antsy. Hackers should possess a wide
        range of skills. Let's test a different skill. Can you find the hidden
        message in this image?
      </h3>
      <hr />
      <a
        href="https://drive.google.com/uc?export=download&id=1K61D-Peq8_cPMYcnQ3RbNU7HZnQ237Kf"
        download
      >
        <img src="~/static/spaceship.jpeg" />
      </a>

      <a
        href="https://drive.google.com/uc?export=download&id=1K61D-Peq8_cPMYcnQ3RbNU7HZnQ237Kf"
        download
      >
        <h3>Download Image</h3>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PuzzleTwo',
  data() {
    return {
      showPage: false,
    }
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

.is-flex {
  width: 60%;
}
</style>

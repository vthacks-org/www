---
navigation: false
---

<template>
  <div class="container">
    <div
      class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
    >
      <h1>Puzzle One</h1>
      <h3>Welcome, hackers!</h3>
      <h3>
        My name's Homer. The jigsaw puzzle was only the start of a 5 puzzle
        journey to win your prize. Good thing you already completed the first
        puzzle. Only 4 more to go! But, I have to let you in on a little secret.
        <b
          >There's only ONE prize for only ONE worthy hacker. Be the first to
          the prize.</b
        >
        Without further ado, here's your next puzzle! Good luck hackers!
      </h3>
      <hr />
      <h3>What could these numbers and letters mean?</h3>
      <h3>
        22 20 8 1 3 11 19 . 3 15 13 / 19 8 1 b e f ( 3 9 16 8 5 18 6 21 14 22 20
        8 1 3 11 19 b b )
      </h3>
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

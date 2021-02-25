<template>
  <section id="error-page" class="hero is-danger is-fullheight">
    <div id="trees-top" v-lazy-load class="trees" alt="Forest">
      <div><div></div></div>
    </div>
    <div class="hero-body is-flex">
      <img
        src="~assets/camper.gif"
        alt="Pull up a log, maybe you will find what you were looking for."
      />
      <div class="has-text-centered">
        <h1 v-if="error.statusCode === 404" class="title">Page not found</h1>
        <h1 v-else class="title">An error occurred</h1>
        <NuxtLink to="/">Return to the Mountain</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'],
}
</script>

<style lang="scss" scoped>
@import '../sass/theme';

#error-page {
  background-color: #19112a;
  overflow: hidden;
  height: 100vh;
}

#trees-top {
  transform: translateY(-10%);
  position: relative;
}

.hero-body {
  transform: translateY(-40%);
  justify-content: center;
  flex-direction: column;
  img {
    width: 70%;
    padding: 3vw;
  }
}

.trees {
  height: 600px;
  width: 100%;
  background: url('~assets/mount_trees.svg'),
    linear-gradient(0deg, rgba(25, 17, 42, 1) 0%, rgba(255, 255, 255, 0) 85%);
  background-repeat: repeat-x;
  div {
    height: 650px;
    background-image: url('~assets/mount_trees.svg');
    background-repeat: repeat-x;
    background-position: -33% 0%;
    div {
      height: 680px;
      background: url('~assets/mount_trees.svg'),
        linear-gradient(
          0deg,
          rgba(25, 17, 42, 1) 0%,
          rgba(25, 17, 42, 1) 30%,
          rgba(255, 255, 255, 0) 60%
        );
      background-repeat: repeat-x;
      background-position: -66% 0%;
    }
  }
}

#trees-bottom {
  background: url('~assets/mount_trees.svg'),
    linear-gradient(
      0deg,
      rgba(34, 13, 51, 1) 0%,
      rgba(34, 13, 51, 1) 13%,
      rgba(28, 21, 87, 0) 25%
    );
}

@media (max-width: $min-width) {
  .hero-body {
    transform: translateY(-40%);
    justify-content: center;
    flex-direction: column;
    img {
      display: none;
    }
  }

  .trees {
    height: 300px;
    width: 100%;
    background: url('~assets/mount_trees.svg'),
      linear-gradient(
        0deg,
        rgba(25, 17, 42, 1) 0%,
        rgba(26, 17, 42, 1) 30%,
        rgba(28, 21, 87, 0) 60%
      );
    background-repeat: repeat-x;
    div {
      height: 320px;
      background-repeat: repeat-x;
      background-position: -33% 0%;
      div {
        height: 380px;
        background-repeat: repeat-x;
        background-position: -300px 0%;
      }
    }
  }

  #trees-bottom {
    background: url('~assets/mount_trees.svg'),
      linear-gradient(
        0deg,
        rgba(34, 13, 51, 1) 0%,
        rgba(34, 13, 51, 1) 13%,
        rgba(28, 21, 87, 0) 25%
      );
  }
}
</style>

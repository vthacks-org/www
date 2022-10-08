<template>
  <section class="section is-large">
    <h1 class="title">Frequently Asked Questions</h1>
    <b-dropdown v-model="isPublic" aria-role="list">
      <template v-if="isPublic" #trigger>
        <b-button
          class="w-3"
          label="Public"
          type="is-primary"
          icon-left="earth"
          icon-right="menu-down"
        />
      </template>

      <template v-else #trigger>
        <b-button
          label="Friends"
          type="is-primary"
          icon-left="account-multiple"
          icon-right="menu-down"
        />
      </template>

      <b-dropdown-item :value="true" aria-role="listitem">
        <div class="media">
          <b-icon class="media-left" icon="earth"></b-icon>
          <div class="media-content">
            <h3>Public</h3>
            <small>Everyone can see</small>
          </div>
        </div>
      </b-dropdown-item>

      <b-dropdown-item :value="false" aria-role="listitem">
        <div class="media">
          <b-icon class="media-left" icon="account-multiple"></b-icon>
          <div class="media-content">
            <h3>Friends</h3>
            <small>Only friends can see</small>
          </div>
        </div>
      </b-dropdown-item>
    </b-dropdown>
  </section>
</template>

<script></script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../sass/theme';

.section {
  background-color: #2d195e;
  // background: $background;
}

.dropDown {
  width: 10px;
}

.title {
  color: white;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  font-variant: small-caps;
}
</style>

<template>
  <section id="about-section" class="section">
    <div class="content has-text-centered">
      <h1 class="title is-1">F.A.Q.</h1>
      <div id="content">
        <b-collapse
          v-for="(collapse, index) of collapses"
          :key="index"
          class="card"
          animation="slide"
          :open="isOpen == index"
          @open="isOpen = index"
        >
          <template #trigger="props">
            <div class="card-header" role="button">
              <p class="card-header-title">
                {{ collapse.title }}
              </p>
              <a class="card-header-icon">
                <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
              </a>
            </div>
          </template>
          <div class="card-content">
            <div class="content">
              {{ collapse.text }}
            </div>
          </div>
        </b-collapse>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          title: `What is VTHacks?`,
          text: `It's an annual event where students of local schools come together at Virginia Tech and spend 36 hours working on teams of up to four people to create and build a project they are passionate about.`,
        },
        {
          title: `How much does it cost?`,
          text: `The event is completely free for all registered participants.`,
        },
        {
          title: `Does VTHacks reimburse travel fees?`,
          text: `VTHacks offers reimbursments on a case by case basis to anyone traveling more than an hour to the event. Please contact us at <a href="mailto:hacker@vthacks.com">hacker@vthacks.com</a> for inquiries.`,
        },
        {
          title: `Will there be food?`,
          text: `Absolutely! We have an entire weekend of catered food waiting for you and your team.`,
        },
        {
          title: `What should I bring?`,
          text: `All you need is your computer, a toothbrush, toothpaste, possibly a sleeping bag, and lots of excitement!`,
        },
        {
          title: `How big can each team be?`,
          text: `We like to keep teams at 4 or less participants so that the competition is fair between teams.`,
        },
        {
          title: `Will there be hardware?`,
          text: `Yes, we'll have lots of cool hardware you can build with!`,
        },
        {
          title: `Do I have to have fun?`,
          text: `Yes. We'll make sure that you do.`,
        },
        {
          title: `Any more questions?`,
          text: `Send us an email at <a href="mailto:hacker@vthacks.com">hacker@vthacks.com</a> and we'll get back to you!`,
        },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../sass/theme';

#about-section {
  background: $midnight;
  width: 100%;
  div {
    h1 {
      color: $peach;
      font-family: $bnr22;
    }
  }
}
</style>

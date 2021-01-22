<template>
  <section id="about-section" class="section">
    <div class="content has-text-centered">
      <h1 class="title is-1">F.A.Q.</h1>
      <div id="content">
        <div class="tile is-ancestor">
          <div class="tile is-child">
            <b-button @click="isMessageModalActive = true"> </b-button>
          </div>
        </div>

        <b-modal v-model="isMessageModalActive" :width="640" scroll="keep">
          <b-message :closable="false">
            <template #header>
              {{ question }}
            </template>
            {{ answer }}
          </b-message>
        </b-modal>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      isMessageModalActive: false,
      questions: [
        {
          q: `What is VTHacks?`,
          a: `It's an annual event where students of local schools come together at Virginia Tech and spend 36 hours working on teams of up to four people to create and build a project they are passionate about.`,
        },
        {
          q: `How much does it cost?`,
          a: `The event is completely free for all registered participants.`,
        },
        {
          q: `Does VTHacks reimburse travel fees?`,
          a: `VTHacks offers reimbursments on a case by case basis to anyone traveling more than an hour to the event. Please contact us at <a href="mailto:hacker@vthacks.com">hacker@vthacks.com</a> for inquiries.`,
        },
        {
          q: `Will there be food?`,
          a: `Absolutely! We have an entire weekend of catered food waiting for you and your team.`,
        },
        {
          q: `What should I bring?`,
          a: `All you need is your computer, a toothbrush, toothpaste, possibly a sleeping bag, and lots of excitement!`,
        },
        {
          q: `How big can each team be?`,
          a: `We like to keep teams at 4 or less participants so that the competition is fair between teams.`,
        },
        {
          q: `Will there be hardware?`,
          a: `Yes, we'll have lots of cool hardware you can build with!`,
        },
        {
          q: `Do I have to have fun?`,
          a: `Yes. We'll make sure that you do.`,
        },
        {
          q: `Any more questions?`,
          a: `Send us an email at <a href="mailto:hacker@vthacks.com">hacker@vthacks.com</a> and we'll get back to you!`,
        },
      ],
    }
  },
  methods: {
    loadcontent() {
      const BreakPoint = 720 // pixels
      let type = 'pc'
      if (window.innerWidth < BreakPoint) {
        type = 'phone'
      }

      document
        .getElementById('content')
        .append(
          document.importNode(document.getElementById(type).content, true)
        )
    },
    mounted() {
      // this.loadcontent()
    },
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

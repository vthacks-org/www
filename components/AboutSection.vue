<template>
  <div id="about-section">
    <div class="gradient-seperator"></div>
    <div class="about-info">
      <div class="vth-logo-term">
        <img src="../assets/vthacks-logo.png" />
        <div class="specs">
          <div><span>OS:</span> VTHacks x86_64</div>
          <div><span>Model:</span> 8TH EDITION</div>
        </div>
      </div>
      <div>
        <div class="about-title">$> cat about.faq</div>
        <div
          v-for="question in questions"
          :key="question"
          class="about-content"
        >
          <div class="question">{{ question.q }}</div>
          <div class="answer">
            <span>{{ question.a }}</span>
          </div>
        </div>
      </div>
      <div class="scanlines"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
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
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../styles/colors';
@import '../styles/headers';

.about-title {
  padding-bottom: 10px;
}

.about-info {
  position: relative;
  background-color: $vth-term-background;
  padding: 40px;
  font-family: 'VT323', monospace;
  color: $vth-term-color;
  font-size: 2em;
  .about-title {
    font-size: 1.5em;
  }
  ::selection {
    background-color: $vth-blue;
    color: white;
  }
}

.scanlines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    rgba(0, 0, 0, 0.2) 70%,
    rgba(0, 0, 0, 0.6)
  );
  background-size: 100% 0.3rem;
  pointer-events: none;
}

.about-content {
  .question {
    font-size: 1.2em;
    color: $vth-red;
  }
  .answer {
    font-size: 1em;
    color: white;
    padding-bottom: 15px;
  }
}

.vth-logo-term {
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
  }
  .specs {
    margin-left: 8px;
    font-size: 0.6em;
    color: white;
    span {
      color: $vth-term-color;
    }
  }
  @media (max-width: 720px) {
    float: none;
    width: fit-content;
    width: intrinsic;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .about-info {
    font-size: 1.5em;
  }
}
</style>

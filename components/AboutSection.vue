<template>
  <section id="about-section" class="section">
    <div id="about-content" class="content has-text-centered">
      <h1 class="title is-1">F.A.Q.</h1>
      <div class="is-flex">
        <div id="general">
          <b-collapse
            v-for="(collapse, index) of general"
            :key="index"
            class="card b-collapse"
            animation="slide"
            :open="isOpenG == index"
            @open="isOpenG = index"
          >
            <template #trigger="props">
              <div class="card-header" role="button">
                <p class="card-header-title">
                  {{ collapse.title }}
                </p>
                <a class="card-header-icon">
                  <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                  </b-icon>
                </a>
              </div>
            </template>
            <div class="card-content">
              <div class="content">
                <!-- eslint-disable-next-line -->
                <span v-html="collapse.text"></span>
              </div>
            </div>
          </b-collapse>
        </div>

        <div id="virtual">
          <b-collapse
            v-for="(collapse, index) of virtual"
            :key="index"
            class="card b-collapse"
            animation="slide"
            :open="isOpenV == index"
            @open="isOpenV = index"
          >
            <template #trigger="props">
              <div class="card-header" role="button">
                <p class="card-header-title">
                  {{ collapse.title }}
                </p>
                <a class="card-header-icon">
                  <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                  </b-icon>
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      isOpenG: 0,
      isOpenV: 0,
      general: [
        {
          title: `What is VTHacks?`,
          text: `It's an annual event where students of local schools come together at Virginia Tech and spend 36 hours working on teams of up to four people to create and build a project they are passionate about.`,
        },
        {
          title: `How much does it cost?`,
          text: `The event is completely free for all registered participants. Additionally we will be awarding prizes and swag to participants`,
        },
        {
          title: `How big can each team be?`,
          text: `We like to keep teams at 4 or less participants so that the competition is fair between teams.`,
        },
        {
          title: `Where is the schedule?`,
          text: `You can find our schedule on our <a target="_blank" href="live.vthacks.com">livesite</a>, along with other great bits of information.`,
        },
        {
          title: `Do I need to know how to program?`,
          text: `No! We will have workshops specifically designed to teach beginners how to program. Additionally promote hacks that are purely ideoligical. If you can sell us a product or an idea, do that instead.`,
        },
        {
          title: `Any more questions?`,
          text: `Send us an email at <a href="mailto:hacker@vthacks.com">hacker@vthacks.com</a> and we'll get back to you!`,
        },
      ],
      virtual: [
        {
          title: `How does a virtual hackathon work?`,
          text: `You should it expect the same setup of a normal hackthon: collaborations with teammates, exciting events, gaming tournaments. The only change is it's from the comfort of your home!`,
        },
        {
          title: `Can I use my personal hardware?`,
          text: `Of course! This year we unfortunately cannot supply participants with rented gear, but we encourage hackers to use anything they find valuable.`,
        },
        {
          title: `What if my internet connection is slow?`,
          text: `We suggest you download any SDKs or developer tools prior to the event. But, besides that, if you can stream a video you can stream a hacathon. ;)`,
        },
        {
          title: `Will there be swag and prizes?`,
          text: `Absolutely! We have developed a system specifically to award involment and particiapation in VTHacks. If you make something fun and post it, we promise we will make something fun then ship it.`,
        },
        {
          title: `Can I use _____ to connect with my teammates instead of discord?`,
          text: `You are welcome to use any platform you are familar with, however if hackers want to engage with mentors and sponsors we recommend using the discord voice channels we supply.`,
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

#about-content {
  .title {
    color: $peach;
  }
}

.card-header-title {
  font-size: 1.2em;
  font-weight: initial;
}

.content {
  color: $midnight;
}

.is-flex {
  margin: 3vw;
  justify-content: space-evenly;
}
</style>

<template>
  <section id="about-section">
    <div id="treesBottom" class="trees" alt="Forest">
      <div><div></div></div>
    </div>
    <div id="about-content" class="content has-text-centered">
      <h1 class="title is-1">F.A.Q.</h1>
      <div class="is-flex section">
        <div id="general" class="dropdown">
          <h3 class="subtitle is-3">General</h3>
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

        <div id="virtual" class="dropdown">
          <h3 class="subtitle is-3">Virtual</h3>
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
                <!-- eslint-disable-next-line -->
                <span v-html="collapse.text"></span>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
      <div id="treesBottom" class="trees" alt="Forest">
        <div><div></div></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      isOpenG: -1,
      isOpenV: -1,
      general: [
        {
          title: `What is VTHacks?`,
          text: `It's an annual event where participants from around the globe come together and spend 36 hours working on teams of up to four people to create a project they are passionate about.`,
        },
        {
          title: `How much does it cost?`,
          text: `The event is completely free for all registered participants. Additionally, we will be awarding prizes and swag to eligible participants on a first come first served basis pending international shipping constraints.`,
        },
        {
          title: `How big can each team be?`,
          text: `We like to keep teams at 4 or less participants so that the competition is fair between teams.`,
        },
        {
          title: `Where is the schedule?`,
          text: `You can find our schedule on our <a target="_blank" href="https://live.vthacks.com">livesite</a>, along with other great bits of information.`,
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
          text: `You should it expect the same setup of a normal hackathon: collaborations with teammates, exciting events, gaming tournaments. The only change is it's from the comfort of your home!`,
        },
        {
          title: `Can I use my personal hardware?`,
          text: `Of course! This year we unfortunately cannot supply participants with rented gear, but we encourage hackers to use anything they find valuable. If you don't have any breadboards lying around you are welcome to make use of hardware emulators as well!`,
        },
        {
          title: `What if my internet connection is slow?`,
          text: `We suggest you download any SDKs or developer tools prior to the event. But, besides that, if you can stream a video you can stream a hackathon. ;)`,
        },
        {
          title: `Will there be swag and prizes?`,
          text: `Absolutely! We have developed a system specifically to award involvement and participation in VTHacks. If you make something fun and submit it to Devpost, we will make something fun and ship it on a first come first served basis, pending international shipping constraints.`,
        },
        {
          title: `Can I use _____ to connect with my teammates instead of discord?`,
          text: `You are welcome to use any platform you are familar with, however if hackers want to engage with mentors and sponsors we recommend using the <a target"_blank" href="https://discord.gg/qRGP9RmPCc">discord</a> voice channels we supply.`,
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
  background-color: #19112a;
}

.title {
  color: $peach;
}

.subtitle {
  color: $day;
}

.dropdown {
  margin: 3vw;
  width: 25%;
  justify-content: flex-start;
  flex-direction: column;
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
}

.section {
  justify-content: space-evenly;
}

.trees {
  height: 600px;
  width: 100%;
  background: url('~assets/mount_trees.svg'),
    linear-gradient(0deg, rgba(25, 17, 42, 1) 0%, rgba(255, 255, 255, 0) 100%);
  background-repeat: repeat-x;
  div {
    height: 650px;
    background-image: url('~assets/mount_trees.svg');
    background-repeat: repeat-x;
    background-position: -33% 0%;
    div {
      height: 680px;
      background-image: url('~assets/mount_trees.svg'),
        linear-gradient(
          0deg,
          rgba(25, 17, 42, 1) 0%,
          rgba(26, 17, 42, 1) 30%,
          rgba(28, 21, 87, 0) 60%
        );
      background-repeat: repeat-x;
      background-position: -300px 0%;
    }
  }
}

@media (max-width: $min-width) {
  .dropdown {
    width: 93%;
    justify-content: center;
    flex-direction: column;
  }

  .section {
    flex-direction: column;
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
      background-image: url('~assets/mount_trees.svg');
      background-repeat: repeat-x;
      background-position: -33% 0%;
      div {
        height: 380px;
        background-image: url('~assets/mount_trees.svg');
        background-repeat: repeat-x;
        background-position: -300px 0%;
      }
    }
  }
}
</style>

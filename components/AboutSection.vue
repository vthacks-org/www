<!-- <html> -->
<template>
  <section id="about-section">
    <div v-lazy-load class="trees" alt="Forest">
      <div><div></div></div>
    </div>
    <div id="about-content" class="content has-text-centered">
      <h1 class="title is-1">F.A.Q.</h1>
      <p id="faq-click-text">Click on the campers to learn more!</p>
      <div class="section">
        <b-modal v-model="active.isOpen">
          <template #default="props">
            <div id="modal-card">
              <div class="card">
                <header class="card-header">
                  <p id="faq-modal-header" class="card-header-title">
                    {{ general[active.index].title }}
                  </p>
                  <button
                    class="card-header-icon"
                    aria-label="Close FAQ modal"
                    @click="props.close"
                  >
                    <span class="icon">
                      <i
                        class="fas fa-times close-faq-modal-button"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </header>
                <div class="card-content">
                  <div class="content" v-html="general[active.index].text" />
                </div>
              </div>
            </div>
          </template>
        </b-modal>

        <div class="campers-container">
          <span
            v-for="(collapse, index) of general"
            :key="index"
            class="camper-wrapper"
            @click="openModal(index)"
          >
            <span v-if="!collapse.disabled" class="chat-bubble">
              {{ general[index].title }}
            </span>
            <img class="camper" :src="collapse.img" alt="Click for FAQ" />
          </span>
        </div>
      </div>
      <div v-lazy-load class="trees" alt="Forest">
        <div><div id="treesBottom"></div></div>
      </div>
    </div>
  </section>
</template>

<script>
// import wallet from '~/assets/wallet.svg'
// import climbinggear from '~/assets/climbinggear.svg'
// import bottle from '~/assets/bottle.svg'
// import trailmix from '~/assets/trailmix.png'
// import rope from '~/assets/rope.png'

export default {
  name: 'AboutSection',
  data() {
    return {
      // isOpen: false,
      active: {
        isOpen: false,
        index: 0,
      },
      general: [
        {
          img: '/faq/Camper1.svg',
          title: `What is VTHacks?`,
          text: `It's an annual event where participants from around the globe come together and spend 36 hours working on teams of up to four people to create a project they are passionate about.`,
        },
        {
          img: '/faq/Camper2.svg',
          title: `Will the event be in-person or virtual?`,
          text: `This year, we are planning to have a completely in-person event! However, This will be subject to change based on university Covid-19 guidelines.`,
        },
        {
          img: '/faq/Camper3.svg',
          title: `How much does it cost?`,
          text: `The event is completely free for all registered participants! Additionally, we will be awarding prizes and swag to eligible participants on a first come first served basis pending international shipping constraints.`,
        },
        {
          img: '/faq/Camper4.svg',
          title: `How big can each team be?`,
          text: `We like to keep teams at 4 or less participants so that the competition is fair between teams.`,
        },
        {
          img: '/faq/Fire.svg',
          title: '',
          text: '',
          disabled: true,
        },
        {
          img: '/faq/Camper5.svg',
          title: `Where is the schedule?`,
          text: `You can find our schedule on our <a target="_blank" href="https://live.vthacks.com">livesite</a>, along with other great bits of information.`,
        },
        {
          img: '/faq/Campers6-7.svg',
          title: `Do I need to know how to program?`,
          text: `No! We will have workshops designed show you the ropes on how to program. Additionally we promote hacks that are purely ideological. If you can sell us a product or an idea, do that instead.`,
        },
        {
          img: '/faq/Camper1.svg',
          title: `Any more questions?`,
          text: `Send us an email at <a href="mailto:hacker@vthacks.com">hacker@vthacks.com</a> and we'll get back to you!`,
        },
      ],
    }
  },
  methods: {
    openModal(index) {
      if (this.general[index].disabled) return

      this.active = { isOpen: true, index }
    },
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

.card-header-title {
  font-size: 1.2em;
  font-weight: initial;
}

.card-img {
  height: auto;
  width: 64px;
}

.content {
  color: $midnight;
}

.dropdown {
  margin: 3vw;
  width: 25%;
  justify-content: flex-start;
  flex-direction: column;
}

#modal-card {
  background-color: white;
  border-radius: 10px;
}

.campers-container {
  display: grid;
  max-width: 1000px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 4px;
  column-gap: 8px;
}

.camper-wrapper {
  display: inline-block;
  position: relative;
}

.chat-bubble {
  visibility: hidden;
  position: absolute;
  z-index: 1;
  width: 10rem;
  bottom: 90%;
  left: 20%;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 50%;
  padding: 1rem 1rem;
  margin-left: -60px;

  @media (min-width: 650px) {
    left: 5%;
  }

  @media (min-width: 780px) {
    left: 10%;
  }

  @media (min-width: 920px) {
    left: 15%;
  }

  @media (min-width: 970px) {
    left: 7%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 75%;
    right: 5%;
    border-width: 15px;
    clip-path: polygon(50% 0%, 20% 35%, 85% 60%);
    border-style: solid;
    border-color: white;
  }
}

.camper-wrapper:hover .chat-bubble {
  visibility: visible;
}

.camper-wrapper:hover {
  cursor: pointer;
}

.camper {
  height: 150px;
  width: auto;
}

.is-flex {
  margin: 3vw;
}

.subtitle {
  color: $day;
}

.section {
  justify-content: space-evenly;
}

.title {
  color: $peach;
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

#treesBottom {
  background: url('~assets/mount_trees.svg'),
    linear-gradient(
      0deg,
      rgba(34, 13, 51, 1) 0%,
      rgba(34, 13, 51, 1) 13%,
      rgba(28, 21, 87, 0) 25%
    );
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
      background-repeat: repeat-x;
      background-position: -33% 0%;

      div {
        height: 380px;
        background-repeat: repeat-x;
        background-position: -300px 0%;
      }
    }
  }

  #treesBottom {
    background: url('~assets/mount_trees.svg'),
      linear-gradient(
        0deg,
        rgba(34, 13, 51, 1) 0%,
        rgba(34, 13, 51, 1) 13%,
        rgba(28, 21, 87, 0) 25%
      );
  }
}

.close-faq-modal-button {
  color: gray;
}

#faq-modal-header {
  margin: auto;
}

#faq-click-text {
  color: #fff;
  font-size: 20px;
}
</style>
